function removeElement(nums: number[], val: number): number {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]; // overwrite nums-> k
      k++;
    }
  }
  return k;
}

const listArray = [0, 1, 2, 2, 3, 0, 4, 2];
const value = 2;
console.log(removeElement(listArray, value));
