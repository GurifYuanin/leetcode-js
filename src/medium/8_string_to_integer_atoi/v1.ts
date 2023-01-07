function isDigital(s: string) {
  switch (s) {
    case '0': ;
    case '1': ;
    case '2': ;
    case '3': ;
    case '4': ;
    case '5': ;
    case '6': ;
    case '7': ;
    case '8': ;
    case '9': return true;
    default: return false;
  }
}

function myAtoi(s: string): number {
  const str = s.trim();
  const arr: string[] = [];
  for (const c of str) {
    if (isDigital(c)) {
      arr.push(c);
    } else if (arr.length === 0 && (c === '-' || c === '+')) {
      arr.push(c);
    } else {
      break;
    }
  }
  const isNeg = arr[0] === '-';
  if (!isDigital(arr[0])) {
    arr.splice(0, 1);
  }
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += Number.parseInt(arr[i]);
    result *= 10;
  }
  result /= 10;
  if (isNeg) {
    result = -result;
  }
  const border = Math.pow(2, 31);
  if (result < -border) {
    return -border;
  }
  if (result >= border) {
    return border - 1;
  }
  return result;
};