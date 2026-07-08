/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumAndMultiply = function(s, queries) {
       const MOD = 1000000007n;
    const n = s.length;

    const digits = [];
    const pos = [];

    for (let i = 0; i < n; i++) {
        const d = Number(s[i]);
        if (d !== 0) {
            digits.push(d);
            pos.push(i);
        }
    }

    const m = digits.length;

    const prefixSum = new Array(m + 1).fill(0);
    const prefixNum = new Array(m + 1).fill(0n);
    const pow10 = new Array(m + 1).fill(1n);

    for (let i = 0; i < m; i++) {
        prefixSum[i + 1] = prefixSum[i] + digits[i];
        pow10[i + 1] = (pow10[i] * 10n) % MOD;
        prefixNum[i + 1] = (prefixNum[i] * 10n + BigInt(digits[i])) % MOD;
    }

    const next = new Array(n).fill(-1);
    const prev = new Array(n).fill(-1);

    let p = 0;
    for (let i = 0; i < n; i++) {
        while (p < m && pos[p] < i) p++;
        if (p < m) next[i] = p;
    }

    p = m - 1;
    for (let i = n - 1; i >= 0; i--) {
        while (p >= 0 && pos[p] > i) p--;
        if (p >= 0) prev[i] = p;
    }

    const ans = [];

    for (const [l, r] of queries) {
        const L = next[l];
        const R = prev[r];

        if (L === -1 || R === -1 || L > R) {
            ans.push(0);
            continue;
        }

        const len = R - L + 1;

        let num =
            (prefixNum[R + 1] -
                (prefixNum[L] * pow10[len]) % MOD +
                MOD) %
            MOD;

        const sum = BigInt(prefixSum[R + 1] - prefixSum[L]);

        ans.push(Number((num * sum) % MOD));
    }

    return ans;
};