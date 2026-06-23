/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxsum = nums[0]
    let sum = 0;

    for(let i=0;i<nums.length;i++){
        sum = sum + nums[i]
        if(sum>maxsum){
            maxsum = sum
        }
        if(sum<0){
            sum = 0
        }
    }


    return maxsum
};