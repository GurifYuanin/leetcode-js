function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let curr = 0;
  let hash = {};
  if (s.length < 2) {
    return s.length;
  }
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] == null) {
      curr += 1;
    } else {
      curr = Math.min(i - hash[s[i]], curr + 1);
    }
    maxLength = Math.max(maxLength, curr);
    hash[s[i]] = i; // save the index
  }
  return maxLength;
};