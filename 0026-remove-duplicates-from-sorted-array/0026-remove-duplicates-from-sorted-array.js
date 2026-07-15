/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length == 0 || nums.length == 1) return nums
    let j = 1
    for(i=1;i<nums.length;i++){
        if(nums[i]!=nums[i-1]){
            nums[j]=nums[i]
            j++
        }
    }
    return j
};