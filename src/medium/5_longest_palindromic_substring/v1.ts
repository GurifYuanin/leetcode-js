function isPalindromic(s: string) {
  const { length } = s;
  for (let i = 0, j = length - 1; i < length && j >= 0; i++, j--) {
    if (s[i] !== s[j]) {
      return false;
    }
  }
  return true;
}

function longestPalindrome(s: string): string {
  const { length } = s;
  let result = '';
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j <= length; j++) {
      const substr = s.slice(i, j);
      if (isPalindromic(substr)) {
        result = result.length > substr.length ? result : substr;
      }
    }
  }
  return result;
};