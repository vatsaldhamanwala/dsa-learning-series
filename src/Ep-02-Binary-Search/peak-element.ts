function findPeakElement(arr: number[]): number {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return end;
}

//main
const peakArray = [1, 3, 4, 5, 2, 1];
const peakIndexIs = findPeakElement(peakArray);
console.log('🚀 ~ peakIndexIs:', peakIndexIs);
