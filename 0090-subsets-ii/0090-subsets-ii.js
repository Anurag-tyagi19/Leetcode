/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let ans = []
    nums.sort((a,b) => a - b)

    const getSubset = (index,current)=> {
        ans.push([...current]);
    

    for(let i = index;i<nums.length;i++){
        if(i > index && nums[i]===nums[i-1]) continue

        current.push(nums[i])
        getSubset(i+1,current)

        current.pop()
    }
  
  }

  getSubset(0,[])

  return ans
};