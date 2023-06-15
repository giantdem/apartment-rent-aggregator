remote_state {
  backend = "s3"
  generate = {
    path      = "backend.tf"
    if_exists = "overwrite"
  }
  config = {
    bucket         = "dzhomir-iacbucket"
    key            = "tf/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
  }
}
