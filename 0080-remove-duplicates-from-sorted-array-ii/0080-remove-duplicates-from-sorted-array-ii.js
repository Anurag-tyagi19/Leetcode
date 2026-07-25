/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let l = 0;

    for (let r = 0; r < nums.length; r++) {
        if (l < 2 || nums[r] !== nums[l - 2]) {
            nums[l] = nums[r];
            l++;
        }
    }

    return l;
};