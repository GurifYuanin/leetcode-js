function firstMissingPositive(nums: number[]): number {
  let max = Number.MIN_SAFE_INTEGER;
  const map = {};
  for (const n of nums) {
    map[n] = true;
    if (n > max) {
      max = n;
    }
  }
  for (let i = 1; i < max; i++) {
    if (!map[i]) {
      return i;
    }
  }
  return Math.max(max + 1, 1);
};