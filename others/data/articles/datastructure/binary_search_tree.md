#### defination
- All vertices in the left subtree of a vertex must hold a value smaller than its own
and all vertices in the right subtree of a vertex must hold a value larger than its own


#### searching
- O(n) = log(n)
- if equal root, end
- if larger than root, search right
- if smaller than root, search left

#### inserting


#### deleting
- pretty complicated, has an alternative way like database, can tag it as deleted instead of really deleted it.

### Self-balancing binary search tree （自平衡二叉树）
- since searching complexity base on the max depth of tree
- so 'fat' tree who has the smallest depth has the best performance
- so we use self-balancing binary search tree
- 任何节点的两个子树的高度最大差别为一


### Implementation
- Node Class
    - .val
    - .parent
    - .left
    - .right
- Tree Class
    - 查找，插入，删除，遍历
    - .root
    - .insert()
    - .min()
    - .max()
    - .in_order(): 中序遍历
    - .pre_order(): 前序遍历
    - .post_order(): 后序遍历
    - .search(): return node
    - 
