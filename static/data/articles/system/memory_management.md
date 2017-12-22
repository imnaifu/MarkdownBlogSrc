 ## Memory Management
 - 有效的管理内存，记录哪些内存是正在使用的，哪些是空闲的；
 - 在进程需要时为其分配内存，进程使用完后释放内存
 
 - 地址空间 (address space)
    - an abstraction of memory
    - every process has its own address space and is independent from each other
    
 - 基址寄存器 (base address register)
    - save the start address of memory
 - 界限寄存器
    - save the total length of memory 
    
 - swapping (交换)
    - allow one process into memory and run for a while, then save it to disk
    
 - virtual memory
    - every process has its own address space
    - which seperate to many section as 'page'
    - every page has sequential address space
    - 'page' maps real physical memory called 'page frame'
    - map relation saved in map table
    - if not found the mapping relation, call a interupt called 'page fault' 
    - then find the least used page, put it to disk, and retrieve the needed page from disk, add relation to map table
    - controlled by Memory Management Unit (MMU)
    - [virtual memorey](http://www.cnblogs.com/curtful/archive/2012/02/16/2354496.html)
