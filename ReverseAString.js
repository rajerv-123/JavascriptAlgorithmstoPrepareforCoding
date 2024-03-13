//Given a string , return a  new string with the reverses order of character

// using inbuilt functions

function reverse(str) { 
  return str.split("").reverse().join("");
}

// without using any inbuilt functions

// function reverse(str) {
//   let emptyVar = "";
//   for (let char of str) {
//     emptyVar = char + emptyVar;
//   }
//   return emptyVar;
// }

console.log(reverse("rajeev"));
/* Let's walk through how the `emptyVar` variable stores the reversed string:

1. Initially, `emptyVar` is an empty string (`""`).
2. The function iterates through each character of the input string (`str`) using a `for...of` loop.
3. In each iteration, it takes the current character (`char`) and concatenates it with the `emptyVar`. Since the new character is being added before the existing characters (`char + emptyVar`), the characters are effectively added in reverse order.
4. After iterating through all characters in the input string, `emptyVar` contains the reversed string.

Here's a step-by-step example to illustrate how `emptyVar` stores the reversed string:

Let's say `str = "hello"`.
1. Initially, `emptyVar = ""`.
2. Iteration 1: `char = "h"`, so `emptyVar` becomes `"h" + "" = "h"`.
3. Iteration 2: `char = "e"`, so `emptyVar` becomes `"e" + "h" = "eh"`.
4. Iteration 3: `char = "l"`, so `emptyVar` becomes `"l" + "eh" = "leh"`.
5. Iteration 4: `char = "l"`, so `emptyVar` becomes `"l" + "leh" = "lleh"`.
6. Iteration 5: `char = "o"`, so `emptyVar` becomes `"o" + "lleh" = "olleh"`.
7. After all iterations, `emptyVar` contains the reversed string `"olleh"`.

So, by concatenating each character at the beginning of `emptyVar`, the function effectively constructs the reversed string. */
