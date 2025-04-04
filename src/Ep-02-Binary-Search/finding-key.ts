function findKey(arr: number[], key: number): number {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (key > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    if (arr[mid] === key) {
      return mid;
    }

    //update mid
    // mid = Math.floor((start + end) / 2);
  }

  return -1;
}

//main
const odd = [3, 5, 9, 13, 27];
const index = findKey(odd, 30);
console.log(`index of 13 is`, index);
