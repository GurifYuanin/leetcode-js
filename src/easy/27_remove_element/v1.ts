// 双指针
function removeElement(nums: number[], val: number): number {
  let index = 0;
  const { length } = nums;
  for (let i = 0; i < length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};