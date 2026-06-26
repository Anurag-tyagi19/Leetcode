/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0
    for(ch of stones){
        if(jewels.includes(ch)){
            count +=1
        }
    }
    return count
};