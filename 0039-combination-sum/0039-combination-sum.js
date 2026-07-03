/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = []

    function dfs(index, currval,arr){
        if(currval < 0) return
        if(currval === 0){
            result.push([...arr])
        }

        for(let i=index;i<candidates.length;i++){
                arr.push(candidates[i])
                dfs(i,currval-candidates[i],arr)
                arr.pop()
        }
    }
    dfs(0,target,[])
    return result
};