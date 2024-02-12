

// Understanding 

// We want to iterate through an array and find sets of numbers that add up to 0
// we cannot 'double count' an index e.g. if arr[1] = -2, we could not use that twice with 4 to get a sum equal to 0 

// Methods and Ideas
// we should use pointers 
// we could...have a pointer at the beginning and the end
// and then slowly move the pointer at the end forward iterating through the middle part of the array 


// Pseudocode 
// create three pointers 
// iterate through starting at positions 1, 2 and last 
// see if there's a combo that equals zero
// move the first, middle, and last pointers 
// do this until j = k


function threeSum(nums) {
  for (let i = 0, j = i + 1, k = nums.length - 1; j == k; i++, j++, k--) {
      console.log(nums[i] + nums[j] + nums[k]);
      console.log('run ' + i )
      if (nums[i] + nums[j] + nums[k] == 0) {
          console.log("found a solution")
          return [i, j, k];
      }
  }
  return [];
};

let nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums))