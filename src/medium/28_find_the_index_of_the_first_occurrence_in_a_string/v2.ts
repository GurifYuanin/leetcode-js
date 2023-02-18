// 暴力解法
function strStr(haystack: string, needle: string): number {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let j = 0;
    for (; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
    if (j === needle.length) {
      return i;
    }
  }
  return -1;
};