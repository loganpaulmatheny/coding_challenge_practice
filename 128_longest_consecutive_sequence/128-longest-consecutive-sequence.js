// Understanding
// You have an unsorted array and you need to determine if the numbers are consecutive and then return the length of them

// Methods
// I think the ruby next method would be really helpful

// Pseudocode
// sort the array
// create a counter
// loop through and increment the counter as long as the next element is 1 larger than the previous
// if it's not add the counter to the set and reset it to 0
// get the maximum number from the set

// Solved - 2 minor adjustments
// Did not account for an empty []
// Did not account for duplicate numbers

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  nums.sort(compare);
  let counter = 1;
  let results = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] === 1) {
      counter++;
    } else if (nums[i + 1] === nums[i]) {
      continue;
    } else {
      results.push(counter);
      counter = 1;
    }
  }
  console.log(Math.max(...results));
  return Math.max(...results);
};

function compare(a, b) {
  return a - b;
}
