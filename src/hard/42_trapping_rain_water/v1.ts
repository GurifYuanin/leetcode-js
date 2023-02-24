// 从下到上进行统计
// 能 AC，但性能极差
function trap(height: number[]): number {
  const cloneHeight = height.slice(0);
  const maxHeight = Math.max(...cloneHeight);
  let result = 0;
  for (let i = 0; i < maxHeight; i++) {
    let left = 0, right = cloneHeight.length - 1;
    while (cloneHeight[left] <= 0 && left < cloneHeight.length) left++;
    while (cloneHeight[right] <=  0 && right >= 0) right--;
    let count = 0;
    while(left < right) {
      if (cloneHeight[left] <= 0) {
        count++;
      }
      left++;
    }
    result += count;
    for (let j = 0; j < cloneHeight.length; j++) {
      cloneHeight[j]--;
    }
  }
  return result;
};