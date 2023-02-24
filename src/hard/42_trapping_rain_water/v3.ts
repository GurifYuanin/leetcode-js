// 暴力解 2.0 版本
// AC，性能跟 v1 差不多
function trap(height: number[]): number {
  let result = 0;
  for (let i = 1; i < height.length - 1; i++) {
    let maxLeft = 0, maxRight = 0;
    for (let j = i; j >= 0; j--) {
      if (height[j] > maxLeft) {
        maxLeft = height[j];
      }
    }
    for (let j = i; j < height.length; j++) {
      if (height[j] > maxRight) {
        maxRight = height[j];
      }
    }
    result += Math.min(maxLeft, maxRight) - height[i];
  }
  return result;
}