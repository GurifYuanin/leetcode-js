function searchRange(nums: number[], target: number): number[] {
  let mid = -1;
  for (let left = 0, right = nums.length - 1; left <= right;) {
    mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      break;
    }
    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (nums[mid] !== target) {
    return [-1, -1];
  }
  let firstIndex = mid, lastIndex = mid;
  do {
    firstIndex--;
  } while(nums[firstIndex] === target);
  do {
    lastIndex++;
  } while (nums[lastIndex] === target);
  return [firstIndex + 1, lastIndex - 1];
};