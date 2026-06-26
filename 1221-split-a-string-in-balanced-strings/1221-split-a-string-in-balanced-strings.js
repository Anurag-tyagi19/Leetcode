/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let balance=0,ret=0
    for (const letter of s){
        balance+=letter=="R"?1:-1
        ret+=balance==0?1:0
    }
    return ret
};