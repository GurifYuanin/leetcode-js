function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const nums = nums1.concat(nums2).sort((a, b) => a - b);
  const { length } = nums;
  const index = Math.floor(length / 2);
  if (length % 2 === 1) {
    return nums[index];
  } else {
    return (nums[index - 1] + nums[index]) / 2;
  }
};