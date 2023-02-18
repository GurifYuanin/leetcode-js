function generateParenthesis(n: number): string[] {
  const result: string[] = [];
  const length = n * 2;
  function dfs(left: number, right: number, s: string) {
    if (s.length === length) {
      result.push(s);
    } else {
      if (left < n) {
        dfs(left + 1, right, s + '(');
      }
      if (right < left) {
        dfs(left, right + 1, s + ')');
      }
    }
  }
  dfs(0, 0, '');
  return result;
};