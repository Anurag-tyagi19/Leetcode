/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var gcdValues = function(nums, queries) {
    const mx = Math.max(...nums);

    const freq = new Array(mx + 1).fill(0);
    for (const x of nums) freq[x]++;

    const exact = new Array(mx + 1).fill(0);


    for (let g = 1; g <= mx; g++) {
        let cnt = 0;
        for (let multiple = g; multiple <= mx; multiple += g) {
            cnt += freq[multiple];
        }
        exact[g] = cnt * (cnt - 1) / 2;
    }

    for (let g = mx; g >= 1; g--) {
        for (let multiple = g * 2; multiple <= mx; multiple += g) {
            exact[g] -= exact[multiple];
        }
    }

    const prefix = new Array(mx + 1).fill(0);
    for (let g = 1; g <= mx; g++) {
        prefix[g] = prefix[g - 1] + exact[g];
    }
    const lowerBound = (target) => {
        let left = 1, right = mx;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (prefix[mid] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };

    const ans = [];
    for (const q of queries) {
        ans.push(lowerBound(q + 1));
    }

    return ans;
};