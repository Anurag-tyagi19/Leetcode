/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let track = {}
    for(let i =0;i<nums.length;i++){
        let elt = target - nums[i]
        if(track[elt]!== undefined){
            return [track[elt],i]
        }
        track[nums[i]] = i
    }
    return []

};