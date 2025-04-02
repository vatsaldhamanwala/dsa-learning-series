// approach - 5------------------------------------------------

function findDuplicate(arr: number[]): number[] {
  let duplicate: number[] = [];
  let alreadySeen = new Set<number>();

  for (let num of arr) {
    if (alreadySeen.has(num)) {
      duplicate.push(num);
    } else {
      alreadySeen.add(num);
    }
  }
  return duplicate;
}

// main
const arr = [1, 2, 4, 6, 2, 6];
console.log(findDuplicate(arr));

// approach 1 (brute force)-------------------------
// function findDuplicate(arr: number[]): number {
//   let duplicate = 0;

//   // 1 -> n-1
//   for (let currentNumber = 1; currentNumber < arr.length; currentNumber++) {
//     let count = 0; // count for current number

//     // 0 -> n-1 (count how many times current number appears in array)
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === currentNumber) {
//         count++;
//       }
//     }

//     //
//     if (count > 1) {
//       duplicate = currentNumber;
//     //   break;
//     }
//   }
//   return duplicate;
// }

// main
// const arr = [4, 2, 1, 3, 1, 2];
// console.log(findDuplicate(arr));

// approach 2 (XOR method)------------------------------

// function findDuplicate(arr: number[]): number {
//   let duplicate = 0;

//   // 0->n-1
//   for (let i = 0; i < arr.length; i++) {
//     duplicate = duplicate ^ arr[i];
//   }

//   // 1 -> n-1
//   for (let i = 1; i < arr.length; i++) {
//     duplicate = duplicate ^ i;
//   }

//   return duplicate;
// }

// // main
// const arr = [4, 2, 1, 3, 1];
// console.log(findDuplicate(arr));

// approach - 3----------------------------------------------
// function findDuplicate(arr: number[]): number[] {
//   let duplicate: number[] = [];
//   arr.sort((a, b) => a - b);

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       duplicate.push(arr[i]);
//     }
//   }
//   return duplicate;
// }

// // main
// const arr = [1, 2, 4, 6, 2, 6];
// console.log(findDuplicate(arr));

// approach - 4-----------------------------------------------

// function findDuplicate(arr: number[]): number[] {
//   let duplicate: number[] = [];
//   let alreadySeen: number[] = [];

//   for (let num of arr) {
//     if (alreadySeen.includes(num)) {
//       duplicate.push(num);
//     } else {
//       alreadySeen.push(num);
//     }
//   }
//   return duplicate;
// }

// // main
// const arr = [1, 2, 4, 6, 2, 6];
// console.log(findDuplicate(arr));
