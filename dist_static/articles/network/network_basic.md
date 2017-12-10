### LAN(Local Area Networks)
- Ethernet

### WAN(Wide Area Network)
- Internet
- Internet include two type of machine
    1. host
    2. router

## Service
- Network provide service for hsot and its process

1. 面向连接的服务是对电话系统的一种模仿
    - 两种
    - message sequence:两个1kb的消息发送，以两个1kb的消息形式到达
    - byte flow: 不存在消息的边界
2. 无连接的服务是对邮政系统的一种模仿

# Protocal
- 用于特定计算机通信的规则的集合

### Protocal stack
- 把不同的协议一层层叠加起来
- 处于最底层的协议会定义如何识别比特流中的数据包的起始和结束位置
- 在更高的一层，协议会确定如何通过复杂的网络把数据包从来源节点发送到目标节点
- 再高一层，协议会确保所有的数据包会按照正确的顺序到达

## IP
- 一种数据报协议，发送者可以向网络上发出长达64kb的数据包，并期望能够到达
- 传送时，会被切割成更小的包
- 独立传输，可能经过不同的路由

### TCP
- 使用IP提供面向连接的数据流
- 为了使用TCP，进程需要首先与一个远程进程建立连接。
- 被请求的进程需要通过机器的IP地址和端口号确定，对进入连接感兴趣的进程监听端口
- 序列号，校验和，出错重传

