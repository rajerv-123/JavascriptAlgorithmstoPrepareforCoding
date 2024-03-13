//Given an array and chunk size divide the array into manySubArray
//where each subarray is of length size

// example  :  chunk[[1,2,3,4],2]  ----> [[1,2],[3,4]]

function chunk(array, size) {
  const result = [];
  let index = 0;
  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index += size;
  }
  return result;
}

console.log(chunk([1, 5, 4, 6], 3));
