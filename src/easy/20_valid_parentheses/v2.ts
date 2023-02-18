const MAP = {
  ')': '(',
  ']': '[',
  '}': '{'
};
const COUNT = {
  '(': 0,
  '[': 0,
  '{': 0
};
const keys = Object.keys(COUNT);

function isValid(s: string): boolean {
  for (const c of s) {
    if (keys.includes(c)) {
      COUNT[c]++;
    } else {
      const key = MAP[c];
      COUNT[key]--;
      if (COUNT[key] < 0) {
        return false;
      }
    }
  }
  return Object.values(COUNT).every(count => count === 0);
};