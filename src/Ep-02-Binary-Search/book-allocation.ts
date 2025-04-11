//book-allocation
function isPossibleSolution(arr: number[], mid: number, m: number): boolean {
  let studentCount = 1;
  let pageSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (pageSum + arr[i] <= mid) {
      pageSum += arr[i];
    } else {
      studentCount++;
      if (studentCount > m) {
        return false;
      }
      pageSum = arr[i];
    }
  }

  return true;
}

function bookAllocation(arr: number[], m: number): number {
  let start = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let end = sum;

  let answer = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (isPossibleSolution(arr, mid, m)) {
      answer = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return answer;
}

// main
const bookArray = [10, 20, 30, 40];
const bookAnswer = bookAllocation(bookArray, 2);
console.log('🚀 ~ bookAnswer:', bookAnswer);

//Q.2-chapter allocation problem
// function isPossibleSolution(arr: number[], mid: number, n: number): boolean {
//   let daysCount = 1;
//   let timeSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (timeSum + arr[i] <= mid) {
//       timeSum += arr[i];
//     } else {
//       daysCount++;
//       if (daysCount > n || arr[i] > mid) {
//         return false;
//       }
//       timeSum = arr[i];
//     }
//   }

//   return true;
// }

// function chapterAllocation(arr: number[], n: number): number {
//   let start = 0;
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   let end = sum;

//   let answer = -1;

//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);

//     if (isPossibleSolution(arr, mid, n)) {
//       answer = mid;
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return answer;
// }

// // main
// const timeArray = [1, 2, 2, 3, 1];
// const chapterAnswer = chapterAllocation(timeArray, 3);
// console.log('chapter answer is: ', chapterAnswer);
