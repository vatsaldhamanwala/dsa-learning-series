function containDuplicate(arr: number[]): boolean {
  const map = new Map<number, number>();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) return true;

    map.set(i, arr[i]);
  }

  return false;
}

const container = [1, 2, 3, 4];
const findDuplicate = containDuplicate(container);
console.log('🚀 ~ findDuplicate:', findDuplicate);
