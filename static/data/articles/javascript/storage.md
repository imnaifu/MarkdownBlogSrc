cookie绑定域名，当设定了一个cookie后，发送请求会包含cookie
针对每个域名有个数限制
include:
- name
- value: after url encode
- domain: domain or subdomain
- path: sent cookie to special path only
- expire: default delete after close, can be set longer, if is previous time then delete immediately
- secure: only SSL(https)

Storage:
- sessionStorage: 储存特定于某个对话的数据，也就是说该数据只能保持到浏览器关闭
- globalStorage: cross session storage
	- depends on domain, protocal, port (https can not acces http)
	- globalStorage["abc.com"].name = '123';
	- 适用于长期储存文档，和用户偏好
- localStorage(replace of globalStorage):
	- 要访问同一个localStorage，必须来自于同一个域名，同一个协议，同一个端口，子域名无效

indexedDB
- 

