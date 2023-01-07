// 优化后的暴力解
// 从下往上注水，一行行抬高

function maxArea(height: number[]): number {
  let result = 0;
  const { length } = height;
  const maxHeight = Math.max(...height);
  for (let i = 1; i <= maxHeight; i++) {
    let left = 0, right = length - 1;
    for (; left < length; left++) {
      if (height[left] >= i) {
        break;
      }
    }
    for (; right > left; right--) {
      if (height[right] >= i) {
        break;
      }
    }
    if (right > left) {
      result = Math.max((right - left) * i, result);
    } else {
      break;
    }
  }
  return result;
};