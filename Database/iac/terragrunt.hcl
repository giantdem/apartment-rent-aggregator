terraform {
  source = "tfr:///terraform-aws-modules/dynamodb-table/aws?version=3.3.0"
}

locals {
  identity_arn = get_aws_caller_identity_arn()
}

include "root" {
  path = find_in_parent_folders()
}

inputs = {
  name      = "RentEntries"
  hash_key  = "Url"
  range_key = "DateTimePosted"
  attributes = [
    {
      name = "Url"
      type = "S"
    },
    {
      name = "DateTimePosted"
      type = "N"
    }
  ]
  ttl_attribute_name = "Ttl"
  ttl_enabled        = "true"
  billing_mode       = "PROVISIONED"
  read_capacity      = 1
  write_capacity     = 1
  tags = {
    Terraform = "true"
  }
}
