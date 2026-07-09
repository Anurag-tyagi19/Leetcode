/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var pathExistenceQueries = function(n, nums, maxDiff, queries) {
     let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push([nums[i], i]);
    }

    arr.sort((a, b) => a[0] - b[0]);

    let comp = new Array(n);

    let id = 0;
    comp[arr[0][1]] = id;

    for (let i = 1; i < n; i++) {

        if (arr[i][0] - arr[i - 1][0] > maxDiff) {
            id++;
        }

        comp[arr[i][1]] = id;
    }

    let ans = [];

    for (let [u, v] of queries) {
        ans.push(comp[u] === comp[v]);
    }

    return ans;
};