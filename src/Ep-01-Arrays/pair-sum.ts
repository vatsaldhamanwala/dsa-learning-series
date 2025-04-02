function findPairSum(arr: number[], sum: number): number[][] {
  let pairOfSum: number[][] = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        pairOfSum.push([arr[i], arr[j]]);
      }
    }
  }

  // if first values of both pairs have same values then sort second value accordingly
  pairOfSum.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  return pairOfSum;
}

const lists = [1, 2, 3, 4, 5];
// const list = [2, -3, 3, 3, -2];

const targetSum = 5;
console.log(findPairSum(lists, targetSum));
