// 暴力解
// Runtime Error
function findSubstring(s: string, words: string[]): number[] {
  const substringLength = words.length * (words[0]?.length || 0);
  let substrings: string[] = [];
  function dfs(substring: string, availableIndexs: number[] = []) {
    if (substring.length === substringLength) {
      substrings.push(substring);
      return;
    }
    for (let i = 0; i < availableIndexs.length; i++) {
      dfs(
        substring + words[availableIndexs[i]],
        availableIndexs.filter(index => index !== availableIndexs[i])
      );
    }
  }
  for (let i = 0; i < words.length; i++) {
    dfs(words[i], words.map((_, index) => index).filter(index => index !== i));
  }

  substrings = [...new Set(substrings)];
  const result: number[] = [];
  for (const substring of substrings) {
    let index = -1
    while(true) {
      index = s.indexOf(substring, index + 1);
      if (index !== -1) {
        result.push(index);
      } else {
        break;
      }
    };
  }
  return result;
};