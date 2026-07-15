/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let len = nums.length
    k = k%len
    if(k==0) return nums
    let arr = nums.slice(len-k)

    for(let i =len-1;i>=k;i--){
        nums[i] = nums[i-k]
    }
    for(let i=0;i<k;i++){
        nums[i] = arr[i]
    }

    return nums
};