# 什么是API
API (Application Program Interface) 就特么是个接口而已啊，复杂解释一堆搞得我我刚开始学的时候半天没搞懂

## -什么是接口
先说什么是接口（Interface），接口并不是什么具体事物，而是一堆规则的集合。
比方说你要开一家药店，药店是一个具体事物，而你要开药店就要调用药店的接口，也就是说要满足开药店的要求（按规矩办事），
这个要求就是接口。比如说，你一定要有执照，你要有卖感冒药，感冒药至少要有2种。

## -再回来说什么是API
API就是编程的接口，或者你可以发明一个词叫OPI(Open Pharmacy Interface)开药店接口，一样的，API就是这程序员用的接口

# 什么是RESTful API
这个嘛，其实就是一种API风格，就像你的药店接口可以使西药风格，也可以是中药风格。

## -什么是HTTP
要理解REST, 要先了解HTTP协议

## -什么是协议(protocol)
哈哈哈哈，要了解什么是HTTP协议，先要理解什么是协议。
协议(主要指通信协议)也是一堆规则的集合，但是和接口不同的是，协议不用拿来实现，而是直接用就可以了
协议规定通信双方应该怎么通信，发送方需要发送什么(e.g header)，接收方要怎么做（e.g.return acknowledgment)

## -HTTP协议
http协议是属于偏向顶层的协议，从下往上
- 物理层协议规定怎样传bit
- Datalink layr规定怎么传frame
- IP保证传到指定地方
- TCP保证不掉包，掉包重传
- HTTP处与应用层，规定传输的信息到底要怎样使用

## -回到REST
为什么讲REST要先讲HTTP，因为实际上HTTP已经规定了怎么传信息，以及受到的信息要怎么用  
但是因为之前没有统一的风格，导致用起来很混乱，就像你去药店买药，你讲了好久医生才听明白你要什么药  
所以出现了RESTful的一种风格，算是一种不是硬性规定的格式，这样你按照风格的约定写好一张纸，医生看一眼就知道你要什么药了  
简单明了，节省了大家的时间  
实际上RESTful不仅仅可以用在http协议之上，但是因为主要是这么用的，也就默认这样了  

## -RESTful API具体是什么
具体是怎样其实不太重要，因为实际上大家都是默认这么用的
一句话概括就是  
> 用URL定位资源（所以URL都是名词），用HTTP协议的东西描述操作（GET,POST...）`


### reference
- [https://www.zhihu.com/question/28557115/answer/48094438](https://www.zhihu.com/question/28557115/answer/48094438)