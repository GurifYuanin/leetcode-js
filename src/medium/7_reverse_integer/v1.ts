function reverse(x: number): number {
  const border = Math.pow(2, 31);
  let result = Number.parseInt(Math.abs(x).toString().split('').reverse().join(''), 10);
  if (x < 0) {
    result = -result;
  }
  if (result < -border || result >= border) {
    return 0;
  }
  return result;
};