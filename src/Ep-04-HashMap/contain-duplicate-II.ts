function containsNearbyDuplicate(arr: number[], k: number): boolean {
  const map = new Map<number, number>();

  for (let i = 0; i < arr.length; i++) {
    const previousIndexOfCurrentElement = map.get(arr[i])!;
    if (map.has(arr[i]) && i - previousIndexOfCurrentElement <= k) return true;

    map.set(arr[i], i);
  }

  return false;
}

const containDuplicateArray = [1, 2, 3, 1];
const isNearestDuplicateFound = containsNearbyDuplicate(containDuplicateArray, 3);
console.log('isNearestDuplicateFound: ', isNearestDuplicateFound);
