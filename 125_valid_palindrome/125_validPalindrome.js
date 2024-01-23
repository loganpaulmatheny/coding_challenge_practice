// Understanding 
// The function should check to see if a string could be considered a valid palindrome (meaning it is the same thing going foward and backward from a point in the middle)

// Methods 
// toLowerCase
// concat
// splice
// join

// Pseudocode 
// fist put the whole string to lower case 
// remove any characters that are not letersand spaces 
// measure the length of the string 
  // if - 1 or odd - good 
  // if not - return false 
// if 'good' find the middle index by calculating the length / 2 and round up 
// split strings on that index 
// reverse the second half and compare using the === 

// ===== MY SOLUTION =====
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let lowerCase = s.toLowerCase();
  let regex = /[^a-z]/gi;
  let modLowerCase = lowerCase.replace(regex, "");
  let patternLength = modLowerCase.length;
  console.log(patternLength);
  if (patternLength === 0) {
      return true;
  }
  if (patternLength % 2 !== 0) {
      let middle = Math.ceil((patternLength / 2));
      console.log(middle)
      let firstHalf = modLowerCase.substring(0, middle - 2);
      console.log(firstHalf)
      let secondHalf = modLowerCase.substring(middle + 1);
      console.log(secondHalf)
      let splitSecondHalf = secondHalf.split("").reverse().join("");
      return firstHalf === splitSecondHalf; 
  }
  return false
};


// ===== TWO POINTERS SOLUTION ===== 
// Explenation 
// Palindrome Check:
// The function uses a two-pointer approach with indices i and j. i starts from the beginning of the string, and j starts from the end of the string.
// It iterates through the string, comparing characters at positions i and j. If any pair of characters is not equal, it means the string is not a palindrome, and the function returns false.
// The loop continues until i is greater than j, ensuring that the entire string is checked.

const isPalindrome = s => {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
}