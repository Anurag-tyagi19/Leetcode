/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    let freq = new Map();

    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    let ans = 1;
    if (freq.has(1)) {
        let ones = freq.get(1);
        ans = Math.max(ans, ones % 2 === 0 ? ones - 1 : ones);
    }

    for (let [num, count] of freq) {

        if (num === 1) continue;

        let curr = num;
        let len = 0;

        while (freq.get(curr) >= 2) {
            len += 2;
            curr = curr * curr;
        }

        if (freq.has(curr) && freq.get(curr) === 1) {
            len += 1;
        } else {
            len -= 1;
        }

        ans = Math.max(ans, len);
    }

    return ans;
};