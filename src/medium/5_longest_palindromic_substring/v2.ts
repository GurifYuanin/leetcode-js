function calcPalindronmicLength(s: string, start: number, end: number) {
  while (start >= 0 && end < s.length) {
    if (s[start] === s[end]) {
      start--;
      end++;
    } else {
      break;
    }
  }
  return end - start - 1;
}

function longestPalindrome(s: string): string {
  const { length } = s;
  let result = '';
  let maxLength = 0;
  for (let i = 0; i < length; i++) {
    const l1 = calcPalindronmicLength(s, i, i);
    const l2 = calcPalindronmicLength(s, i, i + 1);
    if (l1 > l2 && l1 > maxLength) {
      result = s.slice(i - Math.floor(l1 / 2), i + Math.ceil(l1 / 2));
    }
    if (l2 > l1 && l2 > maxLength) {
      result = s.slice(i - l2 / 2 + 1, i + l2 / 2 + 1);
    }
    maxLength = Math.max(l1, l2, maxLength);
  }
  return result;
};