function missingNumber(arr: number[]): number {
  let arrLength = arr.length;

  let expectedSum = (arrLength * (arrLength + 1)) / 2;

  let sumOfArray = 0;

  for (let i = 0; i < arrLength; i++) {
    sumOfArray += arr[i];
  }

  return expectedSum - sumOfArray;
}

// main
const array = [3, 0, 1];
const numberFound = missingNumber(array);

console.log('missing number is: ', numberFound);
