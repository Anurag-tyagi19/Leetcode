/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
     let set = new Set();
    let left = 0;
    let right = 0;
    let len = 0;

    while (right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right]);
            len = Math.max(len, right - left + 1);
            right++;
        } else {
            set.delete(s[left]);
            left++;
        }
    }

    return len;
};