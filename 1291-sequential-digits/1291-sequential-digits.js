/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const res = [];

    for (let start = 1; start <= 9; start++) {
        let num = 0;

        for (let next = start; next <= 9; next++) {
            num = num * 10 + next;

            if (num >= low && num <= high) {
                res.push(num);
            }
        }
    }

    res.sort((a, b) => a - b);
    return res;
};