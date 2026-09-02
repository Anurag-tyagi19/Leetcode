/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0
    let maxzero = 0
    for(i=0;i<nums.length;i++){
        if(nums[i]==1){
            max += 1
        }else{
            max=0
        }
        if(maxzero<max){
            maxzero = max
        }
    }
    return maxzero
};