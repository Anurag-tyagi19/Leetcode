/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let map = {}
    let arr = []

    for(let i=0;i<nums.length;i++){
        map[nums[i]] ? map[nums[i]] += 1 :map[nums[i]] = 1 ;
    }

    for(let key in map){
        if(map[key] > Math.floor(nums.length/3)){
            arr.push(Number(key))
        }
    }
    return arr
};