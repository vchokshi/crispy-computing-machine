# azureapp-demo

Type: Prototype

Terraform code to launch an app in azure.

Terraform code uses AWS s3 as a backend, so you must have credentials to both clouds for this to work. This code likely assumes you have Azure credentials to the proper subscription and azure active directory. 

Users can be added to test this code.

Launches a site at cv.az.iot4.net.

Tested and functional. 

NOTE: DNS record fails to get created due to resource creation delays in Azure. Running `terraform apply` a second time clears up the issue.

@TODO: A fix should be introduced to prevent this problem above from occuring.
