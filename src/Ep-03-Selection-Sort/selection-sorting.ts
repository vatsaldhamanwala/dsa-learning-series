function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    let minimumIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimumIndex]) minimumIndex = j;
    }

    [arr[i], arr[minimumIndex]] = [arr[minimumIndex], arr[i]];
  }
  return arr;
}

//main
const selectionArray = [6, 2, 8, 4, 10];
const sortedArray = selectionSort(selectionArray);
console.log('🚀 ~ sortedArray:', sortedArray);
