/**
 Do not return anything, modify nums in-place instead.
 */
// AC，分为两步操作
// 第一步，从右往左遍历，寻找当前节点右侧的节点中，比自己大的最小值
// 第二步，在第一步的结果上，将右侧所有节点从小到大排序
// 比如 1154 经过第一步得到 1451，再经过第二步得到 1415
function nextPermutation(nums: number[]): void {
  let i = nums.length - 2;
  for (; i >= 0; i--) {
    let min = Number.MAX_SAFE_INTEGER, index = -1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i] && min > nums[j]) {
        min = nums[j];
        index = j;
      }
    }
    if (index !== -1) {
      let tmp = nums[i];
      nums[i] = nums[index];
      nums[index] = tmp;
      i++;
      break;
    }
  }
  for (; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
      }
    }
  }
};