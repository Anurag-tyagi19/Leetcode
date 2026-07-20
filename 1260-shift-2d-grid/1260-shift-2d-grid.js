/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
     let m = grid.length;
    let n = grid[0].length;
    let total = m * n;

    k %= total;

    let ans = Array.from({ length: m }, () => Array(n));

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            let currIndex = r * n + c;
            let newIndex = (currIndex + k) % total;

            let newRow = Math.floor(newIndex / n);
            let newCol = newIndex % n;

            ans[newRow][newCol] = grid[r][c];
        }
    }

    return ans;
};