/**
 * @param {string} s
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function(s) {
    let ones = 0;
    let maxGain = 0;
    let prevZero = Number.MIN_SAFE_INTEGER;

    let i = 0;
    while (i < s.length) {
        let j = i;
        while (j < s.length && s[j] === s[i]) j++;

        let len = j - i;

        if (s[i] === '1') {
            ones += len;
        } else {
            maxGain = Math.max(maxGain, prevZero + len);
            prevZero = len;
        }

        i = j;
    }

    return ones + maxGain;
};