function backtrack(result: number[][], list: number[], nums: number[]) {
  if (list.length === nums.length) {
    result.push(list.slice(0));
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (list.includes(nums[i])) {
        continue;
      }
      list.push(nums[i]);
      backtrack(result, list, nums);
      list.pop();
    }
  }
}

function permute(nums: number[]): number[][] {
  const result = [];
  backtrack(result, [], nums);
  return result;
};