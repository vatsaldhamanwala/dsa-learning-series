function firstOccurrence(arr: number[], key: number): number {
  let start = 0;
  let end = arr.length - 1;
  let answer = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === key) {
      answer = mid;
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return answer;
}

function lastOccurrence(arr: number[], key: number): number {
  let start = 0;
  let end = arr.length - 1;
  let answer = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === key) {
      answer = mid;
      start = mid + 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return answer;
}

//main
const arrays = [1, 2, 4, 5, 5, 6];
const indexOfFirstOccurrence = firstOccurrence(arrays, 5);
const indexOfLastOccurrence = lastOccurrence(arrays, 5);

console.log(`index of first occurrence is`, indexOfFirstOccurrence);
console.log(`index of last occurrence is`, indexOfLastOccurrence);
