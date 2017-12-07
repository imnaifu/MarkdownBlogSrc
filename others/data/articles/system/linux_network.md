## Network Config Files
- /etc/sysconfig/network-scripts/ifcfg-eth0
- /etc/sysconfig/newwork
- /etc/resolv.conf

## Network Enviroment Check
### ifconfig
- can be used to check MAC address and IP
- or temperary set up network
### setup
- permanently set up IP
### netstat
- `netstat -na`
    - t: tcp
    - u: udp
    - l: only listening
    - a: all
    - n: show IP and port instead of domain and server
    - r: show route, same like `route -n`
 - netstat -an | grep ESTABLISHED | wc -l
    - check ESTABLISHED connect and count how many
    - wc(word count), l:check line 

### hostname
- temperary change hostname
- or show current hostname
- permenant change need to change network file

### ifdown/ifup [device name]
- down or up the device

### nslookup [domain]
- return IP of a domain and server address

## Network Testing
### ping 
- check connection with another ip or domain
- `ping -c 3` only ping three times
- using ICMP protocal (Internet Control Message Protocal)

### telnet
- `telnet [domain/IP] [port_number]`
- remote connection detect (unscrypt)
- `ctrl + ]` to close, then `q` to quit telnet

### traceroute
- trace the route info when connect to others
- `traceroute [option] [Domain/IP]`
- `-n` faster in IP 
- using ICMP like ping

### wget
- used to download

### tcpdump
- used to catch packet
- `tcpdump -i eth0 -nnX port 21` (ftp)
- `-i` specify ethernet card
- `-nn` change domain and service to IP and port
- `-X` format to hex and ASCII
- `port` specify port number

### ssh 
- `ssh user_name@ip`

### scp
- secure copy
- `scp [-r] user_name@ip: file_path local_path` : download
- `scp [-r] local_file user_name@ip: upload_path` : upload

### sftp
- interactive like mysql
- `sftp name@server_addr`







