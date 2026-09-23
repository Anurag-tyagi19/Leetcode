/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {}

    let n = nums.length

    for(i=0;i<n;i++){
        map[nums[i]] ? map[nums[i]]+=1 : map[nums[i]] = 1;
    }
    for(let key in map){
        if(map[key] > Math.floor(n/2)){
            return Number(key)
        }
    }
    

}