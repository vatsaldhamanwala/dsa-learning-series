function majorityElement(arr: number[]): number {
  const map = new Map<number, number>();

  let roundedNumber = Math.floor(arr.length / 2);

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i])! || 0) + 1);
    //         3        2
    //         2        1

    if (map.get(arr[i])! > roundedNumber) return arr[i];
  }

  return 0;
}

const elements = [3, 3, 2];
const majorityElementFound = majorityElement(elements);
console.log('🚀 ~ majorityElementFound:', majorityElementFound);
