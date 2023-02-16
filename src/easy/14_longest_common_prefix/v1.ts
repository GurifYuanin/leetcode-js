function longestCommonPrefix(strs: string[]): string {
  const length = Math.min(...strs.map(str => str.length));
  let result = '';
  let isDifferent = false;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] !== strs[j + 1][i]) {
        isDifferent = true;
        break;
      }
    }
    if (isDifferent) {
      break;
    } else {
      result += strs[0][i];
    }
  }
  return result;
};