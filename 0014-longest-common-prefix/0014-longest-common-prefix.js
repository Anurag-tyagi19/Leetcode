/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let str = strs.sort()
    let result = ""
    let str1 = str[0]
    let str2 = str[str.length-1]
    for(let i=0;i<str1.length;i++){
        if(str1[i]!== str2[i]){
            break
        }
        result = result + str1[i]
    }

    return result

};