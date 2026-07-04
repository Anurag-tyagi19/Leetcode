/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.lenght == 1) return 1
    let j =1 
    for(i=1;i<nums.length;i++){
        if(nums[i]!== nums[i-1]){
            nums[j]=nums[i]
            j++
        }
    }
    return j
};