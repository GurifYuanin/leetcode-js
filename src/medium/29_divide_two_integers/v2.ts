// 逐次相减效率太低，改为位运算
// radixs、values 数组太长导致内存溢出
function divide(dividend: number, divisor: number): number {
  const isNeg = dividend < 0 && divisor > 0 || dividend > 0 && divisor < 0;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  const radixs: number[] = [];
  const values: number[] = [];
  let value = divisor;
  let radix = 1;
  do {
    values.push(value);
    radixs.push(radix);
    value = value << 1;
    radix = radix << 1;
  } while (value <= dividend);
  let result = 0;
  for (let i = values.length - 1; i >= 0; i--) {
    if (values[i] <= dividend) {
      result += radixs[i];
      dividend -= values[i];
    }
  }
  if (isNeg) {
    return Math.max(-result, -2147483648);
  } else {
    return Math.min(result, 2147483647);
  }
};