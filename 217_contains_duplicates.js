// my notes https://noteplan.co/n/5F5E76BF-B7D9-4EF6-A72B-D37211AD747D
// my code https://leetcode.com/problems/contains-duplicate/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let dict = {};
  result = false;
  let i = 0;
  while (i < nums.length) {
    if (!dict[nums[i]]) {
      dict[nums[i]] = 1;
    } else {
      return true;
    }
    i++;
  }
  return false;
};
