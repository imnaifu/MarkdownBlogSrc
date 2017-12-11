### 643. Maximum Average Subarray I
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var len = nums.length;
    var sum = 0;
    for (var x=0; x<k; x++){
        sum += nums[x];
    }
    var imax = sum;
    for (var i=0; i<len-k; i++){
        sum = sum - nums[i]  + nums[i+k];
        if (sum > imax){
            imax = sum;
        }
    } 
    return imax/k;
};
```
