function searchIndex(arr: number[], key: number): number {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === key) return mid;

    //if arr[mid]is not equals to key then check which part is sorted
    //left part
    if (arr[start] <= arr[mid]) {
      // left part
      if (key >= arr[start] && key < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      // right part
      if (key > arr[mid] && key <= end) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  //if no target found
  return -1;
}

const searchArrays = [12, 15, 18, 2, 4];
const searchIndexIs = searchIndex(searchArrays, 2);
console.log('🚀 ~ searchIndexIs:', searchIndexIs);
