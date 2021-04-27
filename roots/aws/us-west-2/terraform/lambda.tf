resource "aws_iam_role" "iam_for_lambda" {
  name = "iam_for_lambda"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_lambda_permission" "js" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = "${aws_lambda_function.hellojs.function_name}"
  principal     = "apigateway.amazonaws.com"

  # More: http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-control-access-using-iam-policies-to-invoke-api.html
  source_arn = "arn:aws:execute-api:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:${aws_api_gateway_rest_api.helloworld.id}/*/${aws_api_gateway_method.js.http_method}${aws_api_gateway_resource.js.path}"
}
resource "aws_lambda_permission" "py" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = "${aws_lambda_function.hellopy.function_name}"
  principal     = "apigateway.amazonaws.com"

  # More: http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-control-access-using-iam-policies-to-invoke-api.html
  source_arn = "arn:aws:execute-api:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:${aws_api_gateway_rest_api.helloworld.id}/*/${aws_api_gateway_method.py.http_method}${aws_api_gateway_resource.py.path}"
}





variable "app_version" {
}

resource "aws_lambda_function" "hellojs" {
   function_name = "hellojs"

   s3_bucket = "iot4-lambda-staging"
   s3_key    = "${var.app_version}/hellojs.zip"

   # "main" is the filename within the zip file (index.js) and "handler"
   # is the name of the property under which the handler function was
   # exported in that file.
   handler = "index.handler"
   runtime = "nodejs12.x"

   role = "${aws_iam_role.iam_for_lambda.arn}"
 }

resource "aws_api_gateway_rest_api" "helloworld" {
  name        = "HelloWorld"
  description = "AWS API Gateway"
  endpoint_configuration {
   types = ["REGIONAL"]
  }
}

resource "aws_lambda_function" "hellopy" {
   function_name = "hellopy"

   s3_bucket = "iot4-lambda-staging"
   s3_key    = "${var.app_version}/hellopy.zip"

   handler = "lambda_function.lambda_handler"
   runtime = "python3.8"

   role = "${aws_iam_role.iam_for_lambda.arn}"
 }

resource "aws_api_gateway_resource" "helloworld" {
   rest_api_id = "${aws_api_gateway_rest_api.helloworld.id}"
   parent_id   = "${aws_api_gateway_rest_api.helloworld.root_resource_id}"
   path_part   = "helloworld"
}

resource "aws_api_gateway_resource" "js" {
   rest_api_id = "${aws_api_gateway_rest_api.helloworld.id}"
   parent_id   = "${aws_api_gateway_resource.helloworld.id}"
   path_part   = "js"
}


resource "aws_api_gateway_resource" "py" {
   rest_api_id = "${aws_api_gateway_rest_api.helloworld.id}"
   parent_id   = "${aws_api_gateway_resource.helloworld.id}"
   path_part   = "py"
}

resource "aws_api_gateway_method" "js" {
   rest_api_id   = "${aws_api_gateway_rest_api.helloworld.id}"
   resource_id   = "${aws_api_gateway_resource.js.id}"
   http_method   = "ANY"
   authorization = "NONE"
 }

resource "aws_api_gateway_method" "py" {
   rest_api_id   = "${aws_api_gateway_rest_api.helloworld.id}"
   resource_id   = "${aws_api_gateway_resource.py.id}"
   http_method   = "ANY"
   authorization = "NONE"
 }


resource "aws_api_gateway_integration" "js" {
   rest_api_id = "${aws_api_gateway_rest_api.helloworld.id}"
   resource_id = "${aws_api_gateway_method.js.resource_id}"
   http_method = "${aws_api_gateway_method.js.http_method}"

   integration_http_method = "POST"
   type                    = "AWS_PROXY"
   uri                     = "${aws_lambda_function.hellojs.invoke_arn}"
 }
resource "aws_api_gateway_integration" "py" {
   rest_api_id = "${aws_api_gateway_rest_api.helloworld.id}"
   resource_id = "${aws_api_gateway_method.py.resource_id}"
   http_method = "${aws_api_gateway_method.py.http_method}"

   integration_http_method = "POST"
   type                    = "AWS_PROXY"
   uri                     = "${aws_lambda_function.hellopy.invoke_arn}"
 }

resource "aws_api_gateway_deployment" "test" {
  depends_on  = ["aws_api_gateway_integration.js", "aws_api_gateway_integration.py"]
  rest_api_id = "${aws_api_gateway_rest_api.helloworld.id}"
  stage_name  = "test"
}

#resource "aws_api_gateway_stage" "test" {
  #depends_on  = ["aws_api_gateway_deployment.test"]
  #stage_name    = "test"
  #rest_api_id   = "${aws_api_gateway_rest_api.helloworld.id}"
  #deployment_id = "${aws_api_gateway_deployment.test.id}"
#}

resource "aws_api_gateway_deployment" "prod" {
  depends_on  = ["aws_api_gateway_integration.js", "aws_api_gateway_integration.py"]
  rest_api_id = "${aws_api_gateway_rest_api.helloworld.id}"
  stage_name  = "prod"
}

#resource "aws_api_gateway_stage" "prod" {
  #depends_on  = ["aws_api_gateway_deployment.prod"]
  #stage_name    = "prod"
  #rest_api_id   = "${aws_api_gateway_rest_api.helloworld.id}"
  #deployment_id = "${aws_api_gateway_deployment.prod.id}"
#}

resource "aws_api_gateway_domain_name" "api" {
  domain_name              = "api.iot4.net"
  regional_certificate_arn = "${aws_acm_certificate.api.arn}"

  endpoint_configuration {
    types = ["REGIONAL"]
  }
}

resource "aws_api_gateway_base_path_mapping" "test" {
  api_id      = "${aws_api_gateway_rest_api.helloworld.id}"
  stage_name  = "${aws_api_gateway_deployment.test.stage_name}"
  domain_name = "${aws_api_gateway_domain_name.api.domain_name}"
  base_path   = "${aws_api_gateway_deployment.test.stage_name}"
}
resource "aws_api_gateway_base_path_mapping" "prod" {
  api_id      = "${aws_api_gateway_rest_api.helloworld.id}"
  stage_name  = "${aws_api_gateway_deployment.prod.stage_name}"
  domain_name = "${aws_api_gateway_domain_name.api.domain_name}"
  base_path   = "${aws_api_gateway_deployment.prod.stage_name}"
}




resource "aws_route53_record" "api" {
  name    = "${aws_api_gateway_domain_name.api.domain_name}"
  type    = "A"
  zone_id = "${data.aws_route53_zone.public.zone_id}"

  alias {
    evaluate_target_health = false
    name                   = "${aws_api_gateway_domain_name.api.regional_domain_name}"
    zone_id                = "${aws_api_gateway_domain_name.api.regional_zone_id}"
  }
}
