function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  const str = x.toString();
  const { length } = str;
  if (length <= 1) {
    return true;
  }
  for (let i = 0; i < length / 2; i++) {
    if (str[i] !== str[length - i - 1]) {
      return false;
    }
  }
  return true;
};