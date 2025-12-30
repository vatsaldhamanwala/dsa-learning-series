function twoSum(arr: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < arr.length; i++) {
    let numberNeed = target - arr[i];

    if (map.has(numberNeed)) return [map.get(numberNeed)!, i];
    console.log('🚀 ~ twoSum ~ map:', map);

    map.set(arr[i], i);
  }

  return [];
}

const twoSumArray = [2, 3, 4];
const targetSum = 6;
const resultTwoSum = twoSum(twoSumArray, targetSum);
console.log('🚀 ~ resultTwoSum:', resultTwoSum);
