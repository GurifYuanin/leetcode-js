// 贪心算法
function jump(nums: number[]): number {
  if (nums.length <= 1) {
    return 0;
  }
  let result = 0, index = 0;
  do {
    const maxLength = nums[index];
    let nextIndex = -1, max = 0;
    for (let i = 1; i <= maxLength; i++) {
      if (index + i >= nums.length - 1) {
        nextIndex = nums.length - 1;
        break;
      }
      const sum = nums[index + i] + i;
      if (sum >= max) {
        max = sum;
        nextIndex = index + i;
      }
    }
    result++;
    index = nextIndex;
  } while (index < nums.length - 1);
  return result;
};