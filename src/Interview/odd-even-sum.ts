// approach 1
// function evenSum(array: number[]) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//       sum += array[i];
//     }
//   }
//   return sum;
// }

// function oddSum(array: number[]) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 1) {
//       sum += array[i];
//     }
//   }
//   return sum;
// }

//main
// const input_array = [1, 2, 3, 4, 5, 6];
// const even_sum = evenSum(input_array);
// const odd_sum = oddSum(input_array);

// console.log('Even sum: ', even_sum);
// console.log('Odd sum: ', odd_sum);

// approach 2
function sumOfOddEvenNumbers(array: number[]) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      evenSum += array[i];
    } else {
      oddSum += array[i];
    }
  }
  return { evenSum, oddSum };
}

const input_array = [1, 2, 3, 4, 5, 6];
const sum = sumOfOddEvenNumbers(input_array);
console.log(sum);
