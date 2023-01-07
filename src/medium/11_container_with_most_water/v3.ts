// 官方解

function maxArea(height: number[]): number {
  let result = 0;
  let start = 0;
  let end = height.length - 1;
  while (start < end) {
    const width = end - start;
    result = Math.max(result, Math.min(height[start], height[end]) * width);
    if (height[start] > height[end]) {
      end--;
    } else {
      start++;
    }
  }
  return result;
};