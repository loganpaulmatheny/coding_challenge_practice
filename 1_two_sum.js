// my notes - https://noteplan.co/n/99D53E7A-EAEA-44C9-AC59-FC28C0306D61

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // let result = [];
  // while (result.length < 2) {
  //     let i = 0;
  //     let search = target - nums[i];
  //     let found = nums.findIndex( num => num === search)
  //     console.log(found);
  //     if (found > -1 && found !== i) {
  //         result.push(i, found) ;
  //     }
  //     i++;
  // }
  // return result;

  let result = [];
  let index = 0;
  while (result.length < 2) {
      let search = target - nums[index];
      let found;
      for (let i = 0; i < nums.length; i++) {
       if (nums[i] === search && index !== i) {
           result.push(index, i)
       }   
      }
  index++;
  }
  return result;
}