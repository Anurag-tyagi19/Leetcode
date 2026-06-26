/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let op = []
    for(i=0;i<words.length;i++){
        if(words[i].includes(x)){
            op.push(i)
        }
    }
    return op
};