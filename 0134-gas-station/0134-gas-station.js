/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalgas =0
    let totalcost = 0
    let tank =0
    let start = 0

    for(let i=0;i<gas.length;i++){
        totalgas += gas[i]
        totalcost += cost[i]

        tank += gas[i]-cost[i]

        if(tank < 0){
            start = i+1
            tank = 0
        }
    }
    return totalgas >= totalcost ? start : -1
};