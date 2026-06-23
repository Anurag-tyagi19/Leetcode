/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let c = g.length
    let ch = s.length
    let l = 0
    let r = 0
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    while(l < ch){
        if(g[r]<=s[l]){
            r = r+1
        }
         l = l+1
    }
    return r
};