# Sorting algorithm
![img](http://upload-images.jianshu.io/upload_images/2243690-da1c8b997a16c17c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## Eight Sorting Algorithm
1. Bubble
    - compare every two, exchange if needed.
2. Insert
    - take the specific one out and compare every element before it until it larger,
    - if smaller, then move the position +1 for the one before, repeat
3. Quick
    - sort first then divide
    - need left and right and pivot
4. Merge
    - divide first then sort
    - It's like map-reduce
    - need divide to left and right
5. Selection
    - first round find the smallest, then exchange arr[0] with the smallest
    - second round find the second smallest and so on
6. heap
    - 完全二叉树可以用数组来存
    - 3 functions needed
        - build_heap
        - head_adjustment
        - sort
    - [reference](http://bubkoo.com/2014/01/14/sort-algorithm/heap-sort/)
7. shell 
8. radix
    - not a compare sorting algorithm
