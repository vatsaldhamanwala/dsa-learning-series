function findSquareRoot(input: number): number {
  let start = 0;
  let end = input - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let square = mid * mid;

    if (square === input) return mid;

    if (square < input) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  //if no square root found
  return -1;
}

// main
const arrayInput = 25;
const squareRoot = findSquareRoot(arrayInput);
console.log('🚀 ~ squareRoot:', squareRoot);
