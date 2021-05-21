resource "aws_dynamodb_table" "iot4_speedtest" {
  name           = "iot4-speedtest"
  read_capacity  = 5
  write_capacity = 5
  hash_key       = "testID"
  range_key      = "sourceIP"
  attribute {
    name = "testID"
    type = "S"
  }
  attribute {
    name = "sourceIP"
    type = "S"
  }
  tags = {
    Name = var.project_name
  }
}

resource "aws_api_gateway_rest_api" "iot4_speedtest" {
  name        = "iot4speedtest"
  description = "IOT4 Speedtest API Gateway"
  endpoint_configuration {
    types = ["REGIONAL"]
  }
}

resource "aws_api_gateway_resource" "iot4_speedtest" {
  rest_api_id = aws_api_gateway_rest_api.iot4_speedtest.id
  parent_id   = aws_api_gateway_rest_api.iot4_speedtest.root_resource_id
  path_part   = "iot4speedtest"
}

resource "aws_api_gateway_method" "iot4_speedtest" {
  rest_api_id   = aws_api_gateway_rest_api.iot4_speedtest.id
  resource_id   = aws_api_gateway_resource.iot4_speedtest.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "iot4_speedtest" {
  rest_api_id = aws_api_gateway_rest_api.iot4_speedtest.id
  resource_id = aws_api_gateway_method.iot4_speedtest.resource_id
  http_method = aws_api_gateway_method.iot4_speedtest.http_method

  integration_http_method = "POST"
  type                    = "AWS"
  uri                     = "arn:aws:apigateway:us-west-2:dynamodb:action/PutItem"
  credentials             = "arn:aws:iam::308948682972:role/iot4_speedtest"
  request_templates = {
    "application/json" = file("${path.module}/request_template.json")
  }
}

resource "aws_api_gateway_method_response" "response_200" {
  rest_api_id = aws_api_gateway_rest_api.iot4_speedtest.id
  resource_id = aws_api_gateway_resource.iot4_speedtest.id
  http_method = aws_api_gateway_method.iot4_speedtest.http_method
  status_code = "200"
}

resource "aws_api_gateway_integration_response" "iot4_speedtest" {
  rest_api_id = aws_api_gateway_rest_api.iot4_speedtest.id
  resource_id = aws_api_gateway_resource.iot4_speedtest.id
  http_method = aws_api_gateway_method.iot4_speedtest.http_method
  status_code = aws_api_gateway_method_response.response_200.status_code
}

resource "aws_api_gateway_deployment" "iot4_speedtest_prod" {
  rest_api_id = aws_api_gateway_rest_api.iot4_speedtest.id
  stage_name  = "prod"
}

resource "aws_api_gateway_base_path_mapping" "iot4_speedtest_prod" {
  api_id      = aws_api_gateway_rest_api.iot4_speedtest.id
  stage_name  = aws_api_gateway_deployment.prod.stage_name
  domain_name = aws_api_gateway_domain_name.api.domain_name
  base_path   = "speedtest"
}

