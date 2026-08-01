/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let n = citations.length
    let arr = new Array(n+1).fill(0)

    for(let c of citations){
        if(c>=n){
            arr[n] += 1
        }else{
            arr[c]++
        }
    }
    let papers = 0
     for (let h = n; h >= 0; h--) {
        papers += arr[h];

        if (papers >= h) {
            return h;
        }
    }

    return 0;

};