/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    if(nums[0] != nums[1]) return nums[0]
    if(nums[nums.length-1] != nums[nums.length-2]) return nums[nums.length-1]
    let start = 0
    let end = nums.length-1
    while(start<end){
        let mid  = Math.floor(start + (end-start)/2)
        if(nums[mid-1] != nums[mid] && nums[mid+1] !=nums[mid]){
            return nums[mid]
        }
        if(mid %2 == 0){
             if(nums[mid-1] == nums[mid]) end = mid-1;
             else start = mid+1;
        }else{
            if(nums[mid-1]==nums[mid]) start = mid+1;
            else end = mid-1;
        }
    }
    return nums[start];
};