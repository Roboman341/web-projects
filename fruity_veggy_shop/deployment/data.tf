data "aws_secretsmanager_secret" "home_public_ip" {
  name = "home_public_ip_address"
}

data "aws_secretsmanager_secret_version" "home_public_ip" {
  secret_id = data.aws_secretsmanager_secret.home_public_ip.id
}
