/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // brute force
    // let j = 0
    // let ans = []
    // while(j<nums.length){
    //     let sum = 1;
    //     for(i=0;i<nums.length;i++){
    //         if(i==j) continue;
    //         sum = sum * nums[i]

    //     }
    //     ans.push(sum)
    //     j++
    // }
    // return ans

    // // optimal
    // let forwardarr = []
    // let start = 1

    // for(i=0;i<nums.length;i++){
    //     forwardarr.push(start)
    //     start = start*nums[i]
    // }

    // let res = []
    // let start2 = 1
    // for(i=nums.length-1;i>=0;i--){
    //     res.unshift(start2*forwardarr[i])
    //     start2 = start2*nums[i]
    // }
    // return res

    let n = nums.length
    let answer = new Array(n).fill(1)

    let left = 1
    for(let i=0;i<n;i++) {
        answer[i] = left
        left *= nums[i]
    }

    let right = 1
    for(let i=n-1;i>=0;i--) {
        answer[i] *= right
        right *= nums[i]
    }

    return answer
};