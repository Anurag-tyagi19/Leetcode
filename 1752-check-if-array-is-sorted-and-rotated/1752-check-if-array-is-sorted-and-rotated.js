/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    if(nums.length ==0 || nums.length==1) return true
    let count = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i]>nums[i+1]){
            count++
        }
    }
    if(nums[0]<nums[nums.length-1]) count++

    return count <= 1
    
};