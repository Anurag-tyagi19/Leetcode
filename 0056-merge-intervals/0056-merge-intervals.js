/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let start = 0
    let end = 1

    intervals.sort((a,b)=> a[0]-b[0])

    let prev = intervals[start]
    let res = [prev]

    for(current of intervals){
        if(current[start]<=prev[end]){
            prev[end] = Math.max(current[end],prev[end])
            
        }else{
            res.push(current)
            prev = current
        }
    }
    return res
};