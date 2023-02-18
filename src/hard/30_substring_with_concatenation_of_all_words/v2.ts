function cloneObject(obj) {
  const cloneObj = {};
  for (const key in obj) {
    cloneObj[key] = obj[key];
  }
  return cloneObj;
}

// AC，重点在于 words 内的字符串长度（假设为 n）都一样，构建哈希表记录每个单词的出现次数
// 从左往右进行遍历，每 n 个字符组成一个 word，在哈希表中寻找，若找得到则次数减一，若最终全部减为了 0，则为一个解
// 内存占用比较高
function findSubstring(s: string, words: string[]): number[] {
  const MAP = {}; // map 的 key 为 word，value 为出现的次数
  for (const word of words) {
    if (MAP[word]) {
      MAP[word]++;
    } else {
      MAP[word] = 1;
    }
  }
  const wordLength = words[0]?.length || 0;
  const totalLength = wordLength * words.length;
  const result: number[] = [];
  for (let i = 0; i <= s.length - totalLength; i++) {
    let start = i;
    const map = cloneObject(MAP);
    while(true) {
      const substr = s.slice(start, start + wordLength);
      if (map[substr]) {
        map[substr]--;
      } else {
        break;
      }
      start += wordLength;
    }
    if (Object.values(map).every(count => count === 0)) {
      result.push(i);
    }
  }
  return result;
};