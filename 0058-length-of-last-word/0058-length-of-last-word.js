/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s.length === 0) return 0
    let arr = s.trim().split(' ')
    return arr[arr.length -1].length
};