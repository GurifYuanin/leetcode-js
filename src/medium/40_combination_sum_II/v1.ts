// 照抄的 combination_sum
// Runtime Error
function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const result: number[][] = [];
  function dfs(target: number, index: number, pickedValues: number[]) {
    let currentValue = candidates[index];
    if (target === 0) {
      // 找到正确解
      result.push(pickedValues);
    } else if (target >= currentValue) {
      while (target >= currentValue && index < candidates.length) {
        const cloneArr = pickedValues.slice(0);
        cloneArr.push(currentValue);
        index++;
        dfs(target - currentValue, index, cloneArr);
        currentValue = candidates[index];
      }
    } else {
      // 相加的值大于目标值，说明当前挑选出来的值时错的
    }
  }
  for (let i = 0; i < candidates.length; i++) {
    if (candidates[i] === candidates[i - 1]) {
      continue;
    }
    dfs(target - candidates[i], i + 1, [candidates[i]]);
  }
  // 去重
  return [...new Set(result.map(arr => arr.toString()))].map(str => str.split(',').map(Number));
};