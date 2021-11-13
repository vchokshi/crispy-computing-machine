#!/usr/bin/python
import time
import getopt
import os
import sys

import boto3
from git import Repo
from pprint import pprint


class colours:
    HEADER = "\033[95m"
    OKBLUE = "\033[94m"
    OKCYAN = "\033[96m"
    OKGREEN = "\033[92m"
    WARN = "\033[93m"
    FAIL = "\033[41m"
    ENDC = "\033[0m"
    BOLD = "\033[1m"
    UNDERLINE = "\033[4m"


def restore(argv):

    try:
        opts, args = getopt.getopt(argv, "ri::", [])
    except getopt.GetoptError:
        usage()
        sys.exit(2)

    commit = get_git_commit()

    snapshot_filters = [
        {"Name": "tag:Name", "Values": ["elastio"]},
        {"Name": "tag:Commit", "Values": [str(commit)]},
    ]

    client = boto3.client("ec2")

    for opt, arg in opts:
        if opt == "-i":
            print("Restoring instance {} to hash mark {}".format(arg, commit))

            snapshots = client.describe_snapshots(
                Filters=snapshot_filters, OwnerIds=["self"]
            )

            if len(snapshots["Snapshots"]) < 1:
                print(
                    "{}Snapshot with commit {} not found".format(colours.FAIL, commit)
                )
                sys.exit()

            snapshot_id = snapshots["Snapshots"][0]["SnapshotId"]

            # get_instance_availability_zone()
            instance = client.describe_instances(
                InstanceIds=[arg],
            )
            assert len(instance["Reservations"]) == 1

            az = instance["Reservations"][0]["Instances"][0]["Placement"][
                "AvailabilityZone"
            ]

            bad_volume_id = instance["Reservations"][0]["Instances"][0][
                "BlockDeviceMappings"
            ][0]["Ebs"]["VolumeId"]

            ## Create Volume
            print("Creating a New Volume...")
            new_volume = client.create_volume(
                AvailabilityZone=az,
                SnapshotId=snapshot_id,
            )
            time.sleep(60)

            print("Tagging the New Volume {}...".format(new_volume["VolumeId"]))
            rr = client.create_tags(
                Resources=[new_volume["VolumeId"]], Tags=snapshots["Snapshots"][0]["Tags"]
            )
            time.sleep(30)

            ## Stop the EC2 instance
            print("Stopping the EC2 Instance {}...".format(arg))
            stop = client.stop_instances(
                InstanceIds=[arg],
            )
            time.sleep(60)

            print("Detaching the Bad Volume {}...".format(bad_volume_id))
            response = client.detach_volume(
                Device=instance["Reservations"][0]["Instances"][0]["BlockDeviceMappings"][0]['DeviceName'], InstanceId=arg, VolumeId=bad_volume_id
            )
            time.sleep(30)

            new_volume_id = new_volume["VolumeId"]

            print("Attaching the Good Volume {}...".format(new_volume_id))
            response = client.attach_volume(
                Device=instance["Reservations"][0]["Instances"][0]["BlockDeviceMappings"][0]['DeviceName'], InstanceId=arg, VolumeId=new_volume_id
            )
            time.sleep(30)

            print("Starting the EC2 Instance {}...".format(arg))
            start = client.start_instances(
                InstanceIds=[arg],
            )

            print("Restored the EC2 Instance {}...".format(arg))
            cleanup()


def cleanup():

    client = boto3.client("ec2")

    filters = [{"Name": "tag:Name", "Values": ["elastio"]}]

    response = client.describe_snapshots(Filters=filters, OwnerIds=["self"])

    for snapshot in response["Snapshots"]:
        id = snapshot["SnapshotId"]
        print("Deleting snapshot with id {}".format(id))
        client.delete_snapshot(SnapshotId=id)

    filter_to_append = {"Name": "status", "Values": ["available"]}
    filters.append(filter_to_append)

    response = client.describe_volumes(Filters=filters)

    for volume in response["Volumes"]:
        id = volume["VolumeId"]
        print("Deleting volume with id {}".format(id))
        client.delete_volume(VolumeId=id)


def backup(argv):
    try:
        opts, args = getopt.getopt(argv, "bi::", [])
    except getopt.GetoptError:
        usage()
        sys.exit(2)
    for opt, arg in opts:
        if opt == "-i":
            print("Backing up volumes on instance ", arg)
            snap(arg)


def get_git_commit():
    if os.getenv("GIT_REPO_PATH") is None:
        print("Required Environment Variable GIT_REPO_PATH not set.")
        sys.exit()

    repo_path = os.getenv("GIT_REPO_PATH")

    repo = Repo(repo_path)
    if not repo.bare:

        return str(repo.commit())


def snap(i):

    commit = get_git_commit()

    tag_to_append = {"Key": "Commit", "Value": commit}

    client = boto3.client("ec2")

    filters = [
        {"Name": "status", "Values": ["in-use"]},
        {"Name": "attachment.instance-id", "Values": [i]},
    ]

    response = client.describe_volumes(Filters=filters)

    for v in response["Volumes"]:

        v["Tags"].append(tag_to_append)

        volume_id = v["Attachments"][0]["VolumeId"]
        snap = client.create_snapshot(
            VolumeId=volume_id,
            Description="Elastio Snapshot",
        )

        rr = client.create_tags(
            Resources=[snap["SnapshotId"]],
            Tags=v["Tags"],
        )

        print(
            "Backed up volume {} on instance {} with snapshot {}".format(
                volume_id, i, snap["SnapshotId"]
            )
        )


def usage():
    print("Usage: elastio.py -[hbi]")


def main(argv):
    try:
        opts, args = getopt.getopt(argv, "hbcri::", [])
    except getopt.GetoptError:
        usage()
        sys.exit(2)
    for opt, arg in opts:
        if opt == "-h":
            usage()
            sys.exit()
        elif opt in "-b":
            print("Elastio Backup")
            backup(argv)
        elif opt in "-c":
            print("Elastio Cleanup")
            cleanup()
        elif opt in "-r":
            print("Elastio Restore")
            restore(argv)


if __name__ == "__main__":
    main(sys.argv[1:])
