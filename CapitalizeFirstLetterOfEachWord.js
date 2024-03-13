// write a function that accepts a string . and the function should
// capitlize the first letter of each word in the string then
// retun the capitalize string

// one way
// function capitalize(str) {
//   const words = str.strip(" ");
//   //['this , 'is' , 'rajeev']
//   const result = [];

//   for (let word of words) {
//     result.push(word[0].toUpperCase + word.slice(1));
//   }
//   return result.join(" ");
// }

// another way
function capitalize(str) {
  const words = str.split(" ");
  //['this , 'is' , 'rajeev']
  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalize("this is the time to learn the algorithm concepts"));
