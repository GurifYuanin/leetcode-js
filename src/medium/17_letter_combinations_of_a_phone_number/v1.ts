const DIGIT_MAP = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
};

// 进制器
function addOne(arr: number[], maxs: number[]) {
  let isIncrease = false;
  arr[arr.length - 1]++;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= maxs[i]) {
      isIncrease = true;
      arr[i] = 0;
    } else if (isIncrease) {
      isIncrease = false;
      arr[i]++;
      i++;
    } else {
      break;
    }
  }
  return arr;
}

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }
  const indexs: number[] = Array.from<number>({
    length: digits.length
  }).fill(0);
  const chars = digits.split('');
  const maxs = chars.map(c => DIGIT_MAP[c].length);
  const result: string[] = [];
  let count = maxs.reduce((pre, next) => pre * next, 1);
  while(count > 0) {
    result.push(
      chars.map((c, idx) => DIGIT_MAP[c][indexs[idx]]).join('')
    );
    addOne(indexs, maxs);
    count--;
  }
  return result;
};