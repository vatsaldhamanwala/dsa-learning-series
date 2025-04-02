// prints uniques number

function uniqueElements(array: number[]): number[] {
  let uniqueNumbers: number[] = [];

  for (let number of array) {
    if (!uniqueNumbers.includes(number)) {
      uniqueNumbers.push(number);
    }
  }
  return uniqueNumbers;
}

// main
const numberList: number[] = [2, 3, 5, 3, 2, 5, 7];
console.log(uniqueElements(numberList));

// only appears once
// function uniqueElements(array: number[]): number {
//   let uniques = 0;

//   for (let i = 0; i < array.length; i++) {
//     uniques = uniques ^ array[i];
//   }

//   return uniques;
// }

// // main

// const array = [2, 3, 5, 3, 2, 5, 7];
// console.log(uniqueElements(array));
