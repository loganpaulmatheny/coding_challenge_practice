// takes in a string and determines if it is a palindrome

function isValid(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, '')
  for (let i =0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false
  }
return true
} 