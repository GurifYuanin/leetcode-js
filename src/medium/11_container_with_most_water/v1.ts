// 暴力解
// Time Limit Exceeded

function maxArea(height: number[]): number {
  let result = 0;
  const { length } = height;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      const v = (j - i) * Math.min(height[i], height[j]);
      result = Math.max(result, v);
    }
  }
  return result;
};