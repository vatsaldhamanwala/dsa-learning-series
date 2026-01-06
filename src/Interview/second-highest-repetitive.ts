function getSecondHighestRepetitive(array: number[]) {
  // let max_count = 0;
  // let secondHighest = 0;

  // let counts: number[] = [];
  // let uniqueElement: number[] = [];

  let maxCount = 0;
  let secondMaxCount = 0;

  let highestElement = 0;
  let secondHighestElement = 0;

  for (let i = 0; i < array.length; i++) {
    let count = 1;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        count++;
      }
    }
    if (count > maxCount) {
      // secondMaxElement = array[i];
      // maxCount++;

      secondMaxCount = maxCount;
      secondHighestElement = highestElement;

      maxCount = count;
      highestElement = array[i];
    }
  }
  return secondHighestElement;
}

//main
const input = [1, 5, 5, 3, 3, 3];
const result = getSecondHighestRepetitive(input);
console.log('Second Highest occurrence element is :', result);
