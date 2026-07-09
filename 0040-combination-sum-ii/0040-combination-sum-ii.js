/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b)=> a-b)
    
    let res = []

    function backtrack(curr,i,target){
        if(target == 0){ res.push([...curr]); return}
        if(target <0) return
        prev = -1
        let candidate

        for(let j=i;j<candidates.length;j++){
           if (j > i && candidates[j] === candidates[j - 1]) continue;
            curr.push(candidates[j])
            backtrack(curr,j+1,target-candidates[j])
            curr.pop()
            prev = candidates[j]
        }
    }
    backtrack([],0,target)

    return res
};