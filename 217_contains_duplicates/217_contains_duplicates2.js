// Understanding 
// Given an array of numbers, you will return true if any value is present more than once, and false if every element is distinct

// Methods 
// Set() 

// Pseduocode
// create a set
// create a loop to iterate through nums
// check to see if the set has the value 
// if it does not add it
// if it does return true
// if you get through all of them return false

// Logan Solution 
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let values = new Set();
  for (num of nums) {
      if (values.has(num)) {
          return true
      }
      values.add(num);
  }
  return false
};

// ===== Another V elegant solution =====
// this solution compares the size of the two 
function setSolution(nums) {
  let testSet = new Set(nums);
  return testSet.size !== nums.length;
}

// ===== Also some fun ways to measure the performance of functions =====
const { performance } = require('perf_hooks'); //Timing library

function objectSolution(nums) {
  let testObj = {};
  for (var i = 0; i < nums.length; i++) {
    let aNum = nums[i];
    if (testObj[aNum]) {
      return true;
    } else {
      testObj[aNum] = true;
    }
  }

  return false;
}

function setSolution(nums) {
  let testSet = new Set(nums);
  return testSet.size !== nums.length;
}

function runTest(testFunction, testArray) {
  console.log('   Running test:', testFunction.name);
  let start = performance.now();
  let result = testFunction(testArray);
  let end = performance.now();
  console.log('      Duration:', end - start);
}

let arr = [];
let setSize = 1000;
for (var i = 0; i < setSize; i++) {
  arr.push(i);
}
console.log('Set size:', setSize);
runTest(objectSolution, arr);
runTest(setSolution, arr);

// 1,000 elements (Set is 7x faster):
// Set: 0.15ms
// Object: 1.02ms

// 10,000 elements:
// Set: 0.87ms
// Object: 0.88ms

// 100,000 elements:
// Set: 10.91ms
// Object: 7.58ms

// 1,000,000 elements (Object is almost 3x faster):
// Set: 166.79ms
// Object: 59.55ms

// 10,000,000 elements (Object about 5x faster):
// Set: 3,575.32ms (3.5 seconds!)
// Object: 678.08ms