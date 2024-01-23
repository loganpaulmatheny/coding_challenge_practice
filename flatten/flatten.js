let flatten = [
  [1, 2],
  [3, [1, 2, 3, [4, 5, [7, 8, 9]]]],
];

// question - This only works if result is outside of the function...
// can we do it with result or something like it inside of the function
const result = [];

const spreadArray = (array) => {
  // take the array at index 0
  // check if it's an array
  // array - iterate again
  // not an array - splice that out to the results array
  // use recursion to solve?

  // or we can break down the array and split it up

  array.forEach((element) => {
    if (Array.isArray(element)) {
      // loop through the second element and push it into the first...
      // make the recusive call here

      // what do i want to push into result? - seems good
      // what do i want to do to the element? - get smaller
      // result = result.push(array[element]);
      // [[1, 3], [1 , 2]] =>
      // 0: [1, 3] => spreadArray()
      // 1: 1 => pushed
      // 2: 3 => pushed
      // 3: [1, 2]
      // ...
      // console.log(element);
      spreadArray(element);
    } else {
      // console.log(element);
      result.push(element);
    }
  });

  return result;
};

console.log(spreadArray(flatten));

module.exports = {};
