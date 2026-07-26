/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let j = 0
    for(i=0;i<t.length;i++){
        if(s[j] == t[i]){
            j += 1
        }
    }
    if(j == s.length){
        return true
    }
    return false
};