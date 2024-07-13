const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here   
  let resultArray = [];
  let sum = 0;
  let tempArray = [];

  arr.forEach((item) => {
    if (sum + item > n) {
      resultArray.push(tempArray);
      sum = item;
      tempArray = [item];
    } else {
      sum += item;
      tempArray.push(item);
    }
  });

  if (tempArray.length !== 0) {
    resultArray.push(tempArray);
  }

  return resultArray;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
