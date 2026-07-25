/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {}
    for(i=0;i<nums.length;i++){
        if(map[nums[i]] !== undefined){
            map[nums[i]] += 1
        }else{
            map[nums[i]] = 1
        } 
    }
    for(let key in map){
        if(map[key] > Math.floor(nums.length/2)){
            return Number(key)
        }
    }
};