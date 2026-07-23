/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0
    let start = 0
    let end = height.length-1
    while(start < end){
        let width = (end-start)
        let area = Math.min(height[start],height[end])*width
        max = Math.max(max,area)

        if(height[start]<height[end]){
            start++
        }else end--;
    }
    return max
};