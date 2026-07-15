/**
 * @param {number} n
 * @return {number}
 */
 function gcd(a, b) {
    while (b !== 0) {
        let temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}
var gcdOfOddEvenSums = function(n) {
     let oddSum = n * n;
    let evenSum = n * (n + 1);

    return gcd(oddSum, evenSum);
};