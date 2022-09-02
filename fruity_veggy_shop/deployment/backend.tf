terraform {
  backend "s3" {
    bucket = "generic-backend-bucket-eu-central-1"
    key    = "projects/fruity_veggy_shop/terraform.tfstate"
    region = "eu-central-1"
  }
}