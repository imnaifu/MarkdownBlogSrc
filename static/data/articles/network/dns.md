### host file has higher priority than DNS
- if you save ip-domain_name relation in host file, it will use that first rather than send request to DNS server

## Root server(根域名服务器）
- only 13 of them exist in the whole world, none of them in China

### 递归查询 迭代查询
递归查询
- client sent to DNS server
- return answer or not
迭代查询
- DNS server sent to root server
- return answer or an closer answer
