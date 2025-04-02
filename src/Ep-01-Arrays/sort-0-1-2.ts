function sortOnlyZerosOnceTwos(arr: number[]): number[] {
  //   let sortedArray: number[] = [];

  arr.sort((a, b) => a - b);

  return arr;
}

//main
const list = [0, 2, 2, 1, 1];
console.log(sortOnlyZerosOnceTwos(list));
