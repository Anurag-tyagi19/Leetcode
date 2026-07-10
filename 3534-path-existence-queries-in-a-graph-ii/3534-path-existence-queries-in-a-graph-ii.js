/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {number[]}
 */
var pathExistenceQueries = function(n, nums, maxDiff, queries) {
        const arr = nums.map((val, idx) => [val, idx]);
    arr.sort((a, b) => a[0] - b[0]);

    // Original index -> position in sorted array
    const pos = new Array(n);
    for (let i = 0; i < n; i++) {
        pos[arr[i][1]] = i;
    }

    // nxt[i] = furthest position reachable in one jump
    const nxt = new Array(n);
    let r = 0;
    for (let l = 0; l < n; l++) {
        while (
            r + 1 < n &&
            arr[r + 1][0] - arr[l][0] <= maxDiff
        ) {
            r++;
        }
        nxt[l] = r;
    }

    // Connected components
    const comp = new Array(n);
    let id = 0;
    comp[0] = 0;
    for (let i = 1; i < n; i++) {
        if (arr[i][0] - arr[i - 1][0] > maxDiff) {
            id++;
        }
        comp[i] = id;
    }

    const LOG = Math.ceil(Math.log2(n)) + 1;

    // Binary lifting table
    const up = Array.from({ length: LOG }, () => new Array(n));

    for (let i = 0; i < n; i++) {
        up[0][i] = nxt[i];
    }

    for (let k = 1; k < LOG; k++) {
        for (let i = 0; i < n; i++) {
            up[k][i] = up[k - 1][up[k - 1][i]];
        }
    }

    const ans = [];

    for (const [u, v] of queries) {
        let x = pos[u];
        let y = pos[v];

        if (x === y) {
            ans.push(0);
            continue;
        }

        if (x > y) [x, y] = [y, x];

        if (comp[x] !== comp[y]) {
            ans.push(-1);
            continue;
        }

        let cur = x;
        let steps = 0;

        for (let k = LOG - 1; k >= 0; k--) {
            if (up[k][cur] < y) {
                cur = up[k][cur];
                steps += 1 << k;
            }
        }

        ans.push(steps + 1);
    }

    return ans;

};