## Resource (资源)
- 随着时间推移，能获得、使用及释放的东西
    - 可抢占资源(preemptable resource): 可以从拥有它的进程抢占而不产生任何副作用
    - 不可抢占资源(nonpreemptable resource)：无法从占有它的进程处抢占出来
- Deadlock is related to nonpreemptable resources
- 操作系统只知道资源是一些特殊文件，在任何时刻它们做多只能被任何一个进程打开

### steps
1. request resource
2. using resource
3. release resource

# Deadlock (resource) 
- 如果一个进程集合中的每个进程都在等待只能由该进程集合中的其他进程才能引发的事件，该进程就是死锁的

### condition
- 四个条件全满足才会死锁
1. 互斥条件：每个资源要么已经分配给了一个进程，要么就是可用的
2. 占有和等待条件：已经得到某个资源的进程可以再请求新的资源
3. 不可抢占条件：已经分配给一个进程的资源不能强制性的被强占，只能由占有它的进程显式释放
4. 环路等待条件：死锁发生时，系统中一定有两个或两个以上的进程组成一个环路，该环路中的每个进程都在等待着下一个进程占有的资源

### Solution
1. ignore it when it happens rarely
2. let it happen, detect and take action
3. allocate the resource carefullly, avoid the deadlock dynamically
4. sabatage the 4 conditions above to avoid it

## Communication Deadlock
- 进程A向进程B发送信息，然后阻塞等待回复
- 信息丢失
- 进程B阻塞等待一个请求
- 结果两个都等待
- 如果重发，那么有可能会导致收到两次

## Livelock(活锁)
- 两个进程1,2同时需要两种资源A,B
- 轮询去尝试request
- 1得到A，2得到B
- 两个进程都不会有任何进展，因为没有得到足够的资源
- 没有死锁但是看起来像是死锁

## Starvation (饥饿)
- 有些进程可能永远没办法运行
- 可以通过first come first serve避免











