/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
       let n = 0;
    let h = 0;

    while (h < haystack.length) {

        if (haystack[h] === needle[n]) {
            h++;
            n++;

            if (n === needle.length) {
                return h - n;
            }

        } else {
            h = h - n + 1;
            n = 0;
        }
    }

    return -1;

};