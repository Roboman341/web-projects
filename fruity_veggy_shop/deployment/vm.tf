resource "aws_instance" "main" {
  ami           = "ami-065deacbcaac64cf2" # eu-central-1 ubuntu-22.04
  instance_type = "t2.micro"

  network_interface {
    network_interface_id = aws_network_interface.main.id
    device_index         = 0
  }

  # associate_public_ip_address = true

  key_name = aws_key_pair.main.key_name

  user_data                   = file("init.sh")
  user_data_replace_on_change = true

  tags = local.tags
}

output "vm" {
  value = {
    public_ip  = aws_instance.main.public_ip
    public_dns = aws_instance.main.public_dns
  }
}
