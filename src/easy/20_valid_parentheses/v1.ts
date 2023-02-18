function isValid(s: string): boolean {
  const { length } = s;
  for (let i = 0; i < length; i++) {
    const c = s[i];
    const n1 = i + 1, n2 = i - 1, n3 = length - i - 1;
    if (c === '(') {
      if (s[n1] !== ')' && s[n3] !== ')') {
        return false;
      }
    } else if (c === '[') {
      if (s[n1] !== ']' && s[n3] !== ']') {
        return false;
      }
    } else if (c === '{') {
      if (s[n1] !== '}' && s[n3] !== '}') {
        return false;
      }
    } else if (c === ')') {
      if (
        s[n2] !== '(' && (n3 > n2 || s[n3] !== '(')
      ) {
        return false;
      }
    } else if (c === ']') {
      if (s[n2] !== '[' && (n3 > n2 || s[n3] !== '[')) {
        return false;
      }
    } else if (c === '}') {
      if (s[n2] !== '{' && (n3 > n2 || s[n3] !== '{')) {
        return false;
      }
    }
  }
  return true;
};