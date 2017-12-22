### POSIX (portable operating system interface)
- Linux software standard


### Redirect 
- '<' redirect input
- '>' redirect output 
- ` command1 > file1 ` : instead of displaying the output at the terminal, output it to a file
- ` command2 < file2 ` : instead of get input from the keyboard, input it from a file
- '>>' output to the end of file 
- '<<<' input from a string 


### Piping (管道) => ' | '
- uss the output of one command as the input of second command, can be many
- ` command1 | command2 ` 

### file handles
| Handle | Name | Description |
| ------ | ---  | ----        |
| 0      | stdin| Standard Input |
| 1      | stdout| Standard Output|
| 2      | stderr| Standard Error|

- ` command1 2 > file 1 ` directing the standard error stream to file 1
- ` 2 >&1 ` 指将标准信息输出路径指定为错误信息输出路径（也就是都输出在一起）  
- The reason for this is to distinguish between a file named '1' and stdout, i.e.
'cat file 2>1' vs 'cat file 2>&1'. In the first case, stderr is redirected to a file named '1' and in the second,
stderr is redirected to stdout.

### shell
- shell is just normal program
- get input from keyboard 
- put output to monitor 
- excute other program

### Process in Linux
- 活动实体是进程
- 每个进程执行一段独立的程序并且在进程初始化的时候拥有一个独立的控制线程
- 每个进程拥有一个独立的程序计数器，用来追踪下一个将要被执行的指令
- 每个进程都有个地址空间，逻辑上有三段组成：代码、数据和堆栈段



### Network in Linux
#### Socket
- 像邮筒使用户连接到邮政系统，电话插头使用户连接电话系统
- Socket使用户加入网络系统
- 创建socket
    - 一个参数指定协议，TCP/UDP
    - 一个参数指定地址 IP v4 or v6
    - 一旦套接字在源计算机和目的计算机都建立成功，则两个计算机之间可以建立起一个连接
    - 一方在本地套接字上使用一个listen系统调用，他创建一个缓冲区并阻塞，知道数据到来
    - 另一方使用connect系统调用，并且把本地套接字的文件描述符和远程套接字的地址作为参数传递进去
    - 如果远程一方接受了此次调用则系统在两个套接字之间建立起一个连接
    - 一旦连接建立成功，功能就像一个管道，一个进程可以使用本地套接字的文件描述符来从中读写数据
    - 不需要时，可以通过close系统调用来关闭
    
    
### File system in Linux
- file system has 3 tables
    - 文件描述符表
    - 打开文件描述符表
    - i节点表

- 每个进程都有一个表，存放打开的文件
- 文件描述符(file descriptor): 一种指针
    - 其中0,1,2被占用，用于表示标准输入，标准输出，标准错误
    - 其他文件从3开始
    
- r w x 
    - for normal file, x means exacutable
    - for directory, x means can list the filr 







