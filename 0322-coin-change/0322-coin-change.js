/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = Array(amount + 1).fill(Infinity)

    dp[0] = 0

    for(let curamount = 1;curamount<=amount;curamount++){
        for(let coin of coins){
            if(curamount - coin >=0){
                dp[curamount] = Math.min(dp[curamount], 1+dp[curamount-coin])
            }
        }
    }
    return dp[amount]> amount ? -1: dp[amount]
};