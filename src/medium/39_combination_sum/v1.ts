// 先对候选数组进行排序，再用深度遍历（类似于构建一棵加和二叉树）
function combinationSum(candidates: number[], target: number): number[][] {
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
        dfs(target - currentValue, index, cloneArr);
        index++;
        currentValue = candidates[index];
      }
    } else {
      // 相加的值大于目标值，说明当前挑选出来的值时错的
    }
  }
  for (let i = 0; i < candidates.length; i++) {
    dfs(target - candidates[i], i, [candidates[i]]);
  }
  return result;
};