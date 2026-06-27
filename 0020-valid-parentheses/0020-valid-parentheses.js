/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []

    for(i=0;i<s.length;i++){
        char = s[i]
        if(char === "(" || char === "[" || char ==="{"){
            stack.push(char)
        }else{
            let prevalue = stack.pop()
            if(prevalue === "(" && char!== ")") return false
            if(prevalue === "[" && char!== "]") return false 
            if(prevalue === "{" && char!== "}") return false 
            if(prevalue === undefined) return false 
        }
    }
    return (stack.length === 0)
};