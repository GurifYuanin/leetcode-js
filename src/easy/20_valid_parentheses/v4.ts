const MAP = {
  ')': '(',
  ']': '[',
  '}': '{'
};
const KEYS = Object.values(MAP);

// 栈方法
function isValid(s: string): boolean {
  const stack: string[] = [];
  for (const c of s) {
    if (KEYS.includes(c)) {
      stack.push(c);
    } else {
      const v = MAP[c];
      if (v === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};