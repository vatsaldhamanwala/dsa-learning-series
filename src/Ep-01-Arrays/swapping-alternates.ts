function swapAlternates(array: number[]): void {
  for (let i = 0; i < array.length; i += 2) {
    if (i + 1 < array.length) {
      [array[i], array[i + 1]] = [array[i + 1], array[i]];
    }
  }
}

//main
const evenArr = [1, 2, 7, 8, 5];
const oddArr = [1, 2, 7, 8, 5, 9, 11, 15];

swapAlternates(oddArr);
console.log(oddArr);
