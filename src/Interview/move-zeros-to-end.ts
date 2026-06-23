function moveZerosToEnd(nums: number[]): number[] {
  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    // move non zero number
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  // move zero to end
  while (nonZeroIndex < nums.length) {
    nums[nonZeroIndex] = 0;
    nonZeroIndex++;
  }

  return nums;
}

// main
const numMixedArray = [0, 1, 0, 3, 12];
const resultedNonZeroToEnd = moveZerosToEnd(numMixedArray);
console.log('🚀 ~ resultedNonZeroToEnd:', resultedNonZeroToEnd);
