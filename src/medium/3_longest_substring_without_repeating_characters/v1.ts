// Time Limit Exceeded

function isRepeat(s: string) {
  if (s.length <= 1) {
    return false;
  }
  return s.length !== [...new Set(s)].length;
}

function lengthOfLongestSubstring(s: string): number {
  const { length } = s;
  let result = 0;
  for (let start = 0; start < length; start++) {
    for (let end = start + 1; end <= length; end++) {
      if (isRepeat(s.slice(start, end))) {
        break;
      } else {
        result = Math.max(result, end - start);
      }
    }
  }
  return result;
};