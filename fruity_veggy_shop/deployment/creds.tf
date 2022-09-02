provider "aws" {
  shared_config_files      = ["~/.aws/config"]
  shared_credentials_files = ["~/.aws/credentials"]
}

resource "aws_key_pair" "main" {
  key_name   = "ssh-vm"
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCtE2K+9DVA3QHCzdDDm0JtIJNut5H+xpefV/GnAPEn8CFETlyd2Py43vqUYOF5lUteq4jghsaHg5xiw/7dBuAWXmYutmoA/+2u0WTj6Rifr+VwV65HN3PE6s2+MklPg44Y5vtJ2H3LtRqzeAV1/iO/DIZ/I+CIL9KFKuRB+CauNfHH9UV11oEyLRH2ovqHo6dA+U9/9ERH7gRLln1OpTlKISQcJw/gEKAcEhubEDgEqT5U+zQnXlTtCJ58tz/iLR4sxsT59rBJFEMDwh9YSH8JSIxv0OwSGPyNINM77fAzwUIbbHOLgRp4FgR3FO0JubWai1i1cm+kZ+q7ZNS+Fu8bcs2e/ZqvZWwqNGriuQKCCvsXnt5c+gdoEzXJEAbvqvL5tOl+bmSfIVvzhuU8ECVeR9qa45DANVfgoXlECpNf9wV5iW9RsZUmUxc599+4ghAY8SwNx34rX3uEY70cG1+CrT3sWWVzE86sg+ageynqI6EqaXDHCWwznsvzh4Gq7T1AnGmuwP0WWD5ICsclZd9wg5yqOwGIcxDZ1AUtn+gq/CO4kjpF4Y0z2k9NQ7qr46FwCD0jhPWhx6HrP2Y6oCOF7yxW0BI5+YkkLCu9kJf9w+scolxGGRzupQv/eRcViTLIdjhlIVWX40kRhMiMQRu66XbN6FTn1nofeqhxy2CbNw== noname"
}
