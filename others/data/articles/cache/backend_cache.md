### type
- Memcache
- Redis

### How
- before select from database, try get it from cache first
- if has, just return
- else, get it from database and write into cache
