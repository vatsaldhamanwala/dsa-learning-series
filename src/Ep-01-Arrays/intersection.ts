// approach - 1
// optimized solution

function findArrayIntersection(arr1: number[], arr2: number[]): number[] {
  let ans: number[] = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      ans.push(arr1[i]);
      j++ && i++;
      //   break;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return ans;
}

// main
const firstArr = [1, 2, 2, 3, 4];
const secondArr = [2, 2, 3, 3];

console.log(findArrayIntersection(firstArr, secondArr));

// approach - 2
// function findArrayIntersection(arr1: number[], arr2: number[]): number[] {
//   let ans: number[] = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] < arr2[j]) break;

//       if (arr1[i] === arr2[j]) {
//         ans.push(arr1[i]);
//         arr2[j] = -1;
//         break;
//       }
//     }
//   }
//   return ans;
// }

// // main
// const firstArr = [1, 2, 2, 3, 4];
// const secondArr = [2, 2, 3, 3];

// console.log(findArrayIntersection(firstArr, secondArr));
