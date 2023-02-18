// 从左往右遍历，因为数组已经单调递增了，所以遇到相同则跳过，不同则往前填充
function removeDuplicates(nums: number[]): number {
  let index = 0;
  const { length } = nums;
  for (let i = 1; i < length; i++) {
    if (nums[i] > nums[index]) {
      nums[index + 1] = nums[i];
      index++;
    }
  }
  return index + 1;
};