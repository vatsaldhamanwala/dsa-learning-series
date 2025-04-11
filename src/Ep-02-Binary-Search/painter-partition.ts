function isPossibleSolution(arr: number[], mid: number, k: number): boolean {
  let painterCount = 1;
  let timeSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (timeSum + arr[i] <= mid) {
      timeSum += arr[i];
    } else {
      painterCount++;
      if (painterCount > k) {
        return false;
      }
      timeSum = arr[i];
    }
  }

  return true;
}

function painterPartition(arr: number[], m: number): number {
  let start = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let end = sum;

  let answer = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (isPossibleSolution(arr, mid, m)) {
      answer = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return answer;
}

// main
const boardArray = [1, 2, 3, 4, 5];
const timeAnswer = painterPartition(boardArray, 2);
console.log('time take by painters to paint board is: ', timeAnswer);
