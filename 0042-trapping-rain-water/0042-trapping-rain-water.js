/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let l = 0;
    let r = height.length-1
    let lmax = 0
    let rmax = 0
    let ans = 0

    while(l<r){
        lmax = Math.max(lmax, height[l])
        rmax = Math.max(rmax, height[r])
        if(lmax<rmax){
            ans += lmax - height[l]
            l++
        }else{
            ans += rmax-height[r]
            r--
        }
    }

    return ans

};