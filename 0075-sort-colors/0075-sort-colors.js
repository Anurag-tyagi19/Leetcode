/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0, mid = 0, right= nums.length-1

    while(mid<=right){
        if(nums[mid]===0){
            let temp = nums[left]
            nums[left] = nums[mid]
            nums[mid] = temp
            left++
            mid++
        }else if(nums[mid]===1) mid++;
        else{
            let temp = nums[right]
            nums[right] = nums[mid]
            nums[mid] = temp
            right--
        }
    }
    return nums
};