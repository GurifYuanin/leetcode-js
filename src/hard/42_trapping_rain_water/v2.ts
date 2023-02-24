// 暴力解，从最高柱子往左右两遍找次高的柱子，计算两柱子之间能装多少水
// AC，性能一般
function trap(height: number[]): number {
  let max = Number.MIN_SAFE_INTEGER,
    index = -1;
  for (let i = 0; i < height.length; i++) {
    if (height[i] > max) {
      max = height[i];
      index = i;
    }
  }
  let left = index - 1, right = index + 1;
  let leftIndex = index, rightIndex = index;
  let result = 0;
  while (leftIndex > 0) {
    max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < leftIndex; i++) {
      if (height[i] > max) {
        max = height[i];
        left = i;
      }
    }
    let total = height[left] * (leftIndex - left - 1);
    for (let i = left + 1; i < leftIndex; i++) {
      total -= height[i];
    }
    result += total;
    leftIndex = left;
  }
  while (rightIndex < height.length - 1) {
    max = Number.MIN_SAFE_INTEGER;
    for (let i = rightIndex + 1; i < height.length; i++) {
      if (height[i] > max) {
        max = height[i];
        right = i;
      }
    }
    let total = height[right] * (right - rightIndex - 1);
    for (let i = rightIndex + 1; i < right; i++) {
      total -= height[i];
    }
    result += total;
    rightIndex = right;
  }
  return result;
};