## Binary search tree Javascript implementation

```javascript

function bst(root){

    /* node object */
    function node(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }

    this.root = new node(root),
    
    /* search specific value */
    this.contains = function(val){
        var found = false;
        var cur = this.root;
        // console.log('cur',cur);
        while (!found && cur){
            if (cur.value == val){
                found = true;
            }else if (val > cur.value){
                cur = cur.right;
            }else if (val < cur.value){
                cur = cur.left;
            }
            // console.log(found);
            // console.log(cur);
        }
        return found;
    },

    /* insert specific value */
    this.insert = function(val){
        var cur = this.root;
        new_node = new node(val);
        while (1){
            if (val > cur.value){
                //search and insert left
                if (cur.right == null){
                    cur.right = new_node;
                    break;
                }else{
                    cur = cur.right
                }
            }
            else if (val < cur.value){
                //search and insert right
                if (cur.left == null){
                    cur.left = new_node;
                    break
                }else{
                    cur = cur.left
                }
            }
            else{
                break; //already exist
            }
        }
    },

    /* traverse */
    this.traverse = function(type='in_order'){

        function in_order(node, list=[]){
            if (node){
                in_order(node.left, list);
                list.push(node.value);
                in_order(node.right, list);
            }
            return list;
        }

        function pre_order(node, list=[]){
            if (node){
                list.push(node.value);
                pre_order(node.left, list);
                pre_order(node.right, list);
            }
            return list;
        }

        function post_order(node, list=[]){
            if (node){
                post_order(node.left, list);
                post_order(node.right, list);
                list.push(node.value);
            }
            return list;
        }

        var cur = this.root;
        switch (type){
            default:
            case 'in_order':
                var list = in_order(cur);
                break;
            case 'pre_order':
                var list = pre_order(cur);
                break;
            case 'post_order':
                var list = post_order(cur);
                break;
        }
        return list;
    },

    /* return numbers of node of tree */
    this.size = function (){
        return this.traverse().length;    
    },

    this.min = function(){
        var cur = this.root;
        while (cur.left){
            cur = cur.left
        }
        return cur.value;
    }

    this.max = function(){
        var cur = this.root;
        while (cur.right){
            cur = cur.right;
        }
        return cur.value;
    }


}

var bst = new bst(5);
console.log(bst);
bst.insert(4);
bst.insert(3);
bst.insert(6);
bst.insert(7);
bst.insert(10);
bst.insert(6.5);
console.log(bst.traverse('in_order'));
console.log(bst.traverse('pre_order'));
console.log(bst.traverse('post_order'));
console.log(bst.contains(8));
console.log(bst.size());
console.log(bst.min());
console.log(bst.max());

```
