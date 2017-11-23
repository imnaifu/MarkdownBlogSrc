## inode
- every file in linux system has a inode, which contains the information of file
- [ref](http://www.ruanyifeng.com/blog/2011/12/inode.html)

### both
- when edit the linked file, the original file will change 
- but delete the linkded file will not delete the original file

### link (hard link)
- `ln exist_file new_file`
- not allow to link directory
- only allow create link for the same file system
- 硬链接的作用是允许一个文件拥有多个有效路径名，这样用户就可以建立硬链接到重要文件，起到防止“误删”的功能

### symbolic link
- `ln -s exist_file linked_file`
- 


### general
- 符号链接（symbolic link）在建立的时候建立了一个新的inode，并记录了指向源文件inode的路径。所以symbolic的inode number跟
原始档案的inode number是不一样的。这也是为什么symbolic link能够跨越不同文件系统的原因。符号链接建立了新的inode number，
所以它是一个真实的文件并占有一定的磁盘空间。另外对symbolic link的操作除了删除都会直接对源文件进行操作。
硬链接（hard link）并没有新建立inode，而是新建了一个内容以及inode number、hard link文件名和其他相关资讯的一个directory entry，
所以hard link的inode number跟源文件的inode number是一样的。因为一个文件系统有着相同的inode number，所以hard link是不可以跨文件系统创建的。
也可以将hard link理解为不是一个文件，把它看成是同一个inode的别名，建立hard link后他和源文件互为别名，删除其中任何一个，inode都不会释放。
只有指向同一inode的文件名都删除后，inode才释放。hard link实际上是不占空间的。


- [reference](http://blog.csdn.net/niluchen/article/details/8049304)
