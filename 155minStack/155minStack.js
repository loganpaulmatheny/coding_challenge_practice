// Link to Solutio: https://leetcode.com/problems/min-stack/solutions/3545225/c-java-python-javascript-simple-solution-with-o-1-time-complexity-for-each-function-as-asked/


// Understanding 
// Have not worked with classes in JS...

// Methods 
// Pseduocode 



// ===== NOTES =====
/*
var MinStack = function() {
  this.stack = [];
};

MinStack.prototype.push = function(val) {
  if (this.stack.length === 0) {
    this.stack.push({ val: val, min: val });
  } else {
    var min = Math.min(this.stack[this.stack.length - 1].min, val);
    this.stack.push({ val: val, min: min });
  }
};

MinStack.prototype.pop = function() {
  if (this.stack.length > 0) {
    this.stack.pop();
  }
};

MinStack.prototype.top = function() {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1].val;
  }
  return null;
};

MinStack.prototype.getMin = function() {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1].min;
  }
  return null;
};
*/


// ===== From ChatGPT =====


// Sure, I'd be happy to explain the code to you, focusing on the `push` function of the `MinStack` prototype.

// This code defines a class called `MinStack` which implements a stack data structure with an additional method to retrieve the minimum element in the stack efficiently. Let's go through the `push` function step by step:

// ```javascript
// MinStack.prototype.push = function(val) {
//   if (this.stack.length === 0) {
//     // If the stack is empty, push the value and set the min to the value
//     this.stack.push({ val: val, min: val });
//   } else {
//     // If the stack is not empty
//     // Get the minimum value so far, which is stored in the top element of the stack
//     var min = Math.min(this.stack[this.stack.length - 1].min, val);
//     // Push the new value along with the updated minimum value
//     this.stack.push({ val: val, min: min });
//   }
// };
// ```

// Here's what each part does:

// 1. The `push` function takes a parameter `val`, which represents the value to be pushed onto the stack.

// 2. It first checks if the stack is empty. If it is, this means that the current value being pushed is both the value and the minimum value in the stack. Therefore, it creates an object with two properties: `val` (the value being pushed) and `min` (which is set to the same value).

// 3. If the stack is not empty, it means there are already elements in the stack. In this case, the minimum value for the newly added element needs to be updated. It calculates the minimum of the current minimum value (stored in the top element of the stack) and the value being pushed using `Math.min()` function. This ensures that the `min` property of the newly added element represents the minimum value in the stack up to that point.

// 4. Finally, it creates an object with properties `val` (the value being pushed) and `min` (the updated minimum value) and pushes it onto the stack.

// This approach ensures that each element in the stack knows the minimum value among itself and all the elements below it, allowing for constant time (`O(1)`) retrieval of the minimum value in the stack.