function findTripleSum(arr: number[], sum: number): number[] {
  let pairOfSum: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === sum) {
          pairOfSum.push(arr[i], arr[j], arr[k]);
        }
      }
    }
  }

  return pairOfSum.length > 0 ? pairOfSum : [-1];
}

const listOfArray = [10, 5, 5, 2];
const target = 40;
console.log(findTripleSum(listOfArray, target));
