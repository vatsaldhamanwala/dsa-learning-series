//array, binary search

function findMin(arr: number[]): number {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] > arr[mid + 1]) {
      //value right ma che
      start = mid + 1;
    } else {
      // value left ma che
      end = mid - 1;
    }
  }

  return arr[start];
}

const rotatedArray = [10, 11, 12, 6, 5];
const resultArray = findMin(rotatedArray);
console.log('Min value: ', resultArray);
