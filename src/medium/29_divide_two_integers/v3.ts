// 相较 v2 版本优化了一下，但还是：Time Limit Exceeded
function divide(dividend: number, divisor: number): number {
  const isNeg = dividend < 0 && divisor > 0 || dividend > 0 && divisor < 0;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  let value = divisor;
  let radix = 1;
  do {
    value = value << 1;
    radix = radix << 1;
  } while (value <= dividend);
  let result = 0;
  while (value > 0) {
    if (value <= dividend) {
      dividend -= value;
      result += radix;
    }
    value = value >> 1;
    radix = radix >> 1;
  }
  if (isNeg) {
    return Math.max(-result, -2147483648);
  } else {
    return Math.min(result, 2147483647);
  }
};