generate "backend" {
  path      = "backend.tf"
  if_exists = "overwrite_terragrunt"
  contents  = <<EOF
terraform {
  backend "s3" {
    bucket         = "dzhomir-iacbucket"
    key            = "tf/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
  }
}
EOF
}
