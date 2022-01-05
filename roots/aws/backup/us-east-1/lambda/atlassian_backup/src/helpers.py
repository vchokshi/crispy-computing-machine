import time

import requests


def backup_to_s3(app, bucket, url, client):

    headers = {"Content-Type": "application/json", "User-Agent": "python"}

    date = time.strftime("%Y%m%d_%H%M%S")
    filename = f"{app}_{date}.zip"

    mpu = client.create_multipart_upload(
        ACL="private",
        Bucket=bucket,
        Key=filename,
    )

    s = requests.Session()
    s.headers.update(headers)

    g = s.get(url, stream=True, allow_redirects=True)

    try:
        g.raise_for_status()
    except requests.exceptions.HTTPError as e:
        return {"statusCode": 404, "headers": headers, "body": e}

    print(f"Planning to get {url} and multipart upload to S3")
    # block stream to elastio target
    blockSize = 1024 * 1024 * 500
    partNumber = 0
    parts = []

    for block in g.iter_content(blockSize):
        # used for the multipart upload
        partNumber += 1

        response = client.upload_part(
            Body=block,
            Bucket=bucket,
            ContentLength=blockSize,
            Key=filename,
            PartNumber=partNumber,
            UploadId=mpu["UploadId"],
        )
        print(response["ETag"])
        parts.append({"ETag": response["ETag"], "PartNumber": partNumber})

    response = client.complete_multipart_upload(
        Bucket=bucket,
        Key=filename,
        MultipartUpload={"Parts": parts},
        UploadId=mpu["UploadId"],
    )

    return response
    return {"statusCode": 200, "headers": headers, "body": "OK"}
