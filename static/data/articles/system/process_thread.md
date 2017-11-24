## Process & Thread (进程和线程)
- Process is like the abstraction of CPU
    - so that as a programmer, we don't need to know the detail of CPU
    - it's a instance of program including Program Counter(PC), Register and current value of variable
    - 3 status of porcess
        - running (using CPU now)
        - ready (a pause to wait for other process to finish)
        - stop (wait for some thing to wake)
        
- Thread is inside process
    - one porcess can have mutiple thread
    - in which they share memory and much easier to communicate with each other 
    - faster and lighter than process
    - 进程用于把资源集中到一起，线程是CPU调度的实体
    
- Process table
    - used to save information of the porcess 
    - UID (User IDentification), is the process id

- Scheduling
    - Both process and thread are under control by a scheduling programm
    - process is called by system, thread is controlled by user
    - compute-bound (计算密集型) || I/O bound (I/O密集型)
    - 3 different enviroment of scheduling
        1. 批处理
        2. 交互式
        3. 实时
    - round robin
    - 哲学家就餐问题
    - 读者-写者问题
        

- Interprocess Communacation
    - race condition
    - critical section (临界区)
    - mutual exclusion (互斥)
    - lock
    - producer-consumer
        - producer put data inside buffer
        - consumer fetch data from buffer
        - may have some issue when buffer is full or empty
    - semaphore (信号量)
    - atomic (原子性)
        - a bunch of procedure either excute all or none
