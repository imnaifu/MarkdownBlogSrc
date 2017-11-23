
#### If ob_implicit_flush is set to 1, all out put go out without buffering.

- **ob_start ():** start buffering
- **ob_get_contents ():** get all contents in the buffer
- **ob_end_clean ():** end the buffer and clean it
- **ob_flush ():** sent out the buffer content and clean it.
- **flush ():** 刷出服务器端缓存，并发往客户端，所以先调用ob_flush(), then flush()
