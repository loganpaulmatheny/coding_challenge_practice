// my code - https://leetcode.com/problems/valid-anagram/solutions/
// my notes - https://noteplan.co/n/64A78E88-BAD7-4E87-A455-B173A1B042F0

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let sArr = s.split("");
  let tArr = t.split("");

  function createDictionary(array) {
    let object = {};
    array.forEach((letter) => {
      if (!object[letter]) {
        object[letter] = 1;
      } else {
        object[letter] += 1;
      }
    });
    return object;
  }

  let sObj = createDictionary(sArr);
  let tObj = createDictionary(tArr);
  console.log(sObj, tObj);

  for (const property in sObj) {
    if (sObj[property] !== tObj[property]) {
      return false;
    }
  }

  return true;
};
