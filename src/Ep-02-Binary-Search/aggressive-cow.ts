function isPossibleSolution(stalls: number[], mid: number, cowsPlaced: number): boolean {
  let cowCount = 1;

  let lastPosition = stalls[0];

  for (let i = 0; i < stalls.length; i++) {
    if (stalls[i] - lastPosition >= mid) {
      cowCount++;
      lastPosition = stalls[i];
      if (cowCount === cowsPlaced) return true;
    }
  }

  return false;
}

function aggressiveCows(stalls: number[], cowsPlaced: number): number {
  stalls.sort((a, b) => a - b);

  let low = 0;
  let high = stalls[stalls.length - 1] - stalls[0];

  let answer = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    for (let i = 0; i < stalls.length; i++) {
      if (isPossibleSolution(stalls, mid, cowsPlaced)) {
        answer = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return answer;
}

//main
const stallsArray = [4, 2, 1, 3, 6];
const maxDistanceOfCows = aggressiveCows(stallsArray, 2);
console.log('🚀 ~ maxDistanceOfCows:', maxDistanceOfCows);
