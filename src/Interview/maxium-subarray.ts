function maxSubArray(nums: number[]): number {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// main
const numArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSumFound = maxSubArray(numArray);
console.log('maximum subarray sum is: ', maxSumFound);
