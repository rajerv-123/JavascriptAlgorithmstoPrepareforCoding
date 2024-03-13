// function reverseInteger(value) {
//   let emptyVariable = " ";
//   for (let number of value) {
//     emptyVariable = number + emptyVariable;
//   }
// }

function reverseInteger(value) {
  const reverses = value.toString().split("").reverse().join("");
  return parseInt(reverses) * Math.sign(value);
}

console.log(reverseInteger(-16));
