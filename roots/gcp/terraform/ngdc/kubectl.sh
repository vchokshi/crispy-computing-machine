export USE_GKE_GCLOUD_AUTH_PLUGIN=True
export CLOUDSDK_CORE_PROJECT=ngdc-project-id
gcloud container clusters get-credentials $(terraform output -raw cluster_name) --region $(terraform output -raw cluster_location)
