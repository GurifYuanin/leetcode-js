function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // 合并数组并排序
  const length1 = nums1.length;
  const length2 = nums2.length;
  const nums = Array.from({
    length: length1 + length2
  }).map(() => 0);
  let i = 0, j = 0, k = 0;
  while (i < length1 && j < length2) {
    nums[k++] = nums1[i] < nums2[j] ? nums1[i++] : nums2[j++];
  }
  while (i < length1) nums[k++] = nums1[i++];
  while (j < length2) nums[k++] = nums2[j++];

  // 取出中位数
  const { length } = nums;
  const index = Math.floor(length / 2);
  if (length % 2 === 1) {
    return nums[index];
  } else {
    return (nums[index - 1] + nums[index]) / 2;
  }
};