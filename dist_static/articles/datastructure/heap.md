#### heap (also called binary heap or priority queue)
- it's a complete binary tree
- dequeue by priority not first in first out
- support 2 method
    - insert (and maintain the structure)
    - dequeue (delete highest priority)
 
##### insert 
1. insert into the last positsion of the complete tree
2. using the percolate_up method to maintain the structure
    - compare the latest node and its parent node, if new node has higher priority swap
    - until parent node priority higher than current node or it become root 
    
##### delete 
1. only root allow to delete
2. after delete root, need to reconstruct using the percolate_down
    - make the last node become new root
    - let it compare to the child node, if priority less than the child, swap with the lowest child
    - until higer than any child node, or become leaf node

##### more
- [info](http://www.cnblogs.com/vamei/archive/2013/03/20/2966612.html)


