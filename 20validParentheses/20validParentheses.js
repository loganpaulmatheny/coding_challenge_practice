// Understanding 
// given string the function checks to make sure it only contains parentheses and has the appropriate matching pairs
// e.g. "()[]" is valid; '(]' is not valid

// Methods and Ideas
// store value in variable and check the next one each time
// if good move on otherwise return false


// Pseduocode 
// split the string into an array 
// create case statement to check if the next value is appropriate

// ===== TRIAL 1 =====
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function (s) {
//   let split = s.split("")
//   for (let i = 0; i < split.length; i + 2) {
//     switch (split[i]) {
//       case "(":
//         if (split[i + 1] === ")") console.log('good pair')
//         break;
//       default:
//         console.log("next")
//     }
//   }
// };

//  ===== VERSION 2 =====
// A little bit of help from chatgpt as well to solve this.
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  const pairs = {
      "(": ")",
      "{": "}",
      "[": "]",
  }

  for (let paren of s) {
      if (pairs[paren]) {
          stack.push(paren);
      }

      else{ 
          let top = stack.pop();
          console.log(top)
          // So this says get the end parentheses and store it under 'top.' 
          console.log(pairs[top])
          console.log(paren)
          if (pairs[top] !== paren) {
              return false
          }
      }
  }
  if (stack.length > 0) {
      return false;
  }
  return true;
};