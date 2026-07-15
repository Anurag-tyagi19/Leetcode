/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let track = {}
    for(let i=0;i<nums.length;i++){
        if(track[nums[i]]){
            return nums[i]
        }
        track[nums[i]] = 1
    }
    return false
};