// Given a String return the character that is most commaonly used in the string

// Example: maxChar("abccccccccccdddee") === "c"
// Example: maxChar("rajeev 12222222222") === "2"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    charMap[char] = ++charMap[char] || 1;
  }

  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxChar = key;
    }
  }
  return maxChar;
}

console.log(maxChar("rajeev 1ccccccccccc"));
