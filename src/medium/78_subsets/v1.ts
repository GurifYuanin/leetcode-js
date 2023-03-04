function backtrack(result: number[][], list: number[], nums: number[], start: number) {
  result.push(list.slice(0));
  for (let i = start; i < nums.length; i++) {
    list.push(nums[i]);
    backtrack(result, list, nums, i + 1);
    list.pop();
  }
}

function subsets(nums: number[]): number[][] {
  const result = [];
  backtrack(result, [], nums, 0);
  return result;
};