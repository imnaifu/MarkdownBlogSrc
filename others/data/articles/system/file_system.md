# File system
- 文件系统存在的原因是因为需要独立于进程的信息
- 文件是一种地址空间
- 文件是字节流
- 文件是一种抽象，提供了一种在磁盘保存信息而且方便以后读取的方法。这种方法可以使用户不用了解存储信息的方法、位置和实际磁盘工作方式等细节
1. able to save large number of data
2. data remains when the process ends
3. data can be accessed by multiple process concurrently

### 命名
- Linux 区分大小写, Window不区分大小写

### File Extension
- linux just use it as an aggrement, not forceable
- Windows need to register.

### linux file type
- character special file(字符特殊文件)
- block special file(块特殊文件)
- regular file
    - ASCII file （文本文件）
        - 可以显示和打印
        - 可以用任何文本编辑器编辑
    - Binary file （二进制文件）
        - 有特殊的内部结构
        - 只能被特殊的程序识别
        
### file path
- absolute path
- relative path


### i-node(index-node)
- file system has 3 parts
    1. 超级块： 存放文件系统本身信息
    2. i Node table: file attribute
    3. file content area
- 文件储存就是记录各个文件用到了那些磁盘块
- i-node table is used to save this info.

