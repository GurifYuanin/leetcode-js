// 二分查找分在特殊情况下的使用
// 复杂度 log2(n)
// 然而执行时间和内存占用都变差了
function search(nums: number[], target: number): number {
  for (let left = 0, right = nums.length - 1; left <= right;) {
    const mid = Math.floor((left + right) / 2),
      midNum = nums[mid],
      leftNum = nums[left],
      rightNum = nums[right];
    if (midNum === target) {
      return mid;
    }
    if (midNum < target) {
      if (target <= rightNum || leftNum < midNum) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    if (midNum > target) {
      if (target >= leftNum || rightNum > midNum) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return -1;
};