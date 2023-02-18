// 传统方法，进行逐次相减，会超时
function divide(dividend: number, divisor: number): number {
  const isNeg = dividend < 0 && divisor > 0 || dividend > 0 && divisor < 0;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  let count = 0;
  while (dividend >= divisor) {
    dividend -= divisor;
    count++;
  }
  if (isNeg) {
    return Math.max(-count, -2147483648);
  } else {
    return Math.min(count, 2147483647);
  }
};