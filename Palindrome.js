// Palindrome

// function palindrome(str) {
//   const reversed = str.split("").reverse().join("");

//   if (str === reversed) {
//     return true;
//   }
//   return false;
// }

function palindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log("here is the output:", palindrome("pop"));
