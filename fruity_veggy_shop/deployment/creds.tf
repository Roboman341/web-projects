provider "aws" {
  shared_config_files      = ["~/.aws/config"]
  shared_credentials_files = ["~/.aws/credentials"]
}

resource "aws_key_pair" "main" {
  key_name   = "ssh-vm"
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC5WZuPE9Mf0L12LvIxUJDK0uu15JcQNL2z/R4dB9DeQpVcj9rLne0gJFmfzTLaR+yfLPYyipvbt/fZ53RrAwxPY4MktMV0Bl0hY2ziejJy5v70madwgzDqfIlbd+hOUv9fHrnKIMBMpVw2AISj5knDvU18i6OTV76z7Bl3afTtQ5EIQEeF5FEvRhi70d9b1D1DWh+85bLgk9qMEc0ibgdEPbpBx8lLvK+E7Hkj4xTzCSbSBy0/yeGiUYJPpdMtOJNyYzzSmhx2GnOgQkExf0fZ1/YerybSleQrUigRxNhyUWUBi7NOOPJLRcnSt6ZfJQYzaJpC7BZ2Rpk1MSHf0vKW5DxxTbO2rgPAr2d/KMsqU67t8n5c/dlWpKbjSrUEZmDf4WjAPMMhDPS/oYdEgQ+v9oipNBEtTZEX71uYLuJPOLB9HEpKXyTG5+2tDSqhQB28qLkn1MQYu82vMU27LVC1K2F7bxZZIxr01PM27oIjW3a+ArH5kl+rlWwkMiievYXm87fDxrfDL6Ct0lkI/KHWq93rCXcCala5W7cjfqw7/YWAiKeJaMpUFIgtKr7x7yFZh8IKzjQwGYNn5zRrtkWrOFeFSpTJTSdowK0WfRq3/OuZ9ZEAuSCUM1RJBRYM1IgZ/5strixUDsEu6CRKdQxhDrTdCxOR8ZCl10ZrrAhEaQ== aws_vm_ssh_key"
}