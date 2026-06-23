/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0
    let sum = 0
    for(i=0;i<nums.length;i++){
        
        if(nums[i] != 0){
            sum = sum + 1
            if(sum>max){
                max = sum
            }
        }else{
            sum =0
        }
    }
    return max;
};