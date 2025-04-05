function findPivotIndex(arr: number[]): number {
  let totalSum = 0;
  let leftSum = 0;
  //sum of all elements in array
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    if (leftSum * 2 + arr[i] === totalSum) {
      return i;
    } else {
      leftSum += arr[i];
    }
  }

  //if no pivot index found
  return -1;
}

//main
const pivotArray = [1, 7, 3, 6, 5, 6, 20];
const pivotIndex = findPivotIndex(pivotArray);
console.log('🚀 ~ pivotIndex:', pivotIndex);
