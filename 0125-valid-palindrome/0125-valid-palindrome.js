/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
   let str=""
   for(i=s.length-1;i>=0;i--){
    str = str + s[i]
   }
   console.log(str)
   if(s === str){
    return true
   }else{
    return false
   }
};