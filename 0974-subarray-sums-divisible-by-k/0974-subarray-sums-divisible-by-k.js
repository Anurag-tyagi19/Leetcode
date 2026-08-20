/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
     let map = {}
     let sum = 0
     map[0] = 1
     let result = 0
     for(i=0;i<nums.length;i++){
        sum = sum + nums[i]
        let remainder = ((sum % k) + k) % k;
        if(map[remainder]){
            result += map[remainder]
            map[remainder] += 1
        }else{
            map[remainder] = 1
        }

     }
     return result

};