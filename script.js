const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
  const result = arr.reduce((resultArray, item, index) => { 
  const chunkIndex = Math.floor(index/n)

  if(!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = [] // start a new chunk
  }

  resultArray[chunkIndex].push(item)

  return resultArray
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
