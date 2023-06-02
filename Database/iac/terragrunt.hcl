terraform {
  source = "terraform-aws-modules/dynamodb-table/aws"
}

provider "aws" {
  region = "us-east-1"
}

include {
  path = find_in_parent_folders()
}

inputs = {
  name           = "RentEntries"
  hash_key       = "Url"
  range_key      = "DateTimePosted"
  attributes = [
    {
      name = "Url"
      type = "S"
    },
    {
      name = "DateTimePosted"
      type = "N"
    },
    {
      name = "Ttl"
      type = "N"
    },
    {
      name = "Title"
      type = "S"
    },
    {
      name = "Price"
      type = "N"
    },
    {
      name = "Currency"
      type = "S"
    },
    {
      name = "BuildingType"
      type = "S"
    },
    {
      name = "IsBuildingModern"
      type = "BOOL"
    },
    {
      name = "FloorNumber"
      type = "N"
    },
    {
      name = "RoomsAmount"
      type = "N"
    },
    {
      name = "ApartmentAreaInSqMeters"
      type = "N"
    },
    {
      name = "Country"
      type = "S"
    },
    {
      name = "City"
      type = "S"
    },
    {
      name = "CityArea"
      type = "S"
    },
    {
      name = "Address"
      type = "S"
    }
  ]
  ttl_attribute_name = "Ttl"
  billing_mode       = "PROVISIONED"
}
