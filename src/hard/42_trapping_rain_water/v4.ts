// v3 版本加了动态规划
function trap(height: number[]): number {
  const leftMaxs = Array.from(height).fill(0);
  const rightMaxs = Array.from(height).fill(0);
  leftMaxs[0] = height[0];
  rightMaxs[rightMaxs.length - 1] = height[height.length - 1];
  for (let i = 1; i < leftMaxs.length; i++) {
    leftMaxs[i] = Math.max(height[i], leftMaxs[i - 1]);
  }
  for (let i = rightMaxs.length - 2; i >= 0; i--) {
    rightMaxs[i] = Math.max(height[i], rightMaxs[i + 1]);
  }
  let result = 0;
  for (let i = 1; i < height.length - 1; i++) {
    result += Math.min(leftMaxs[i], rightMaxs[i]) - height[i];
  }
  return result;
}