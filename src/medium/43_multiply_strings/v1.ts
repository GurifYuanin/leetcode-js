function multiplyN(num: string, n: number) {
  let increase = 0;
  const result: number[] = [];
  for (let i = num.length - 1; i >= 0; i--) {
    const v = Number(num[i]) * n + increase;
    increase = Math.floor(v / 10);
    result.push(v % 10);
  }
  if (increase > 0) {
    result.push(increase);
  }
  return result;
}

// 正常解
// AC，性能中下
function multiply(num1: string, num2: string): string {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }
  const nums = num1.split('').map((n, index) => {
    const arr = multiplyN(num2, Number(n));
    const zeros = Array.from({
      length: num1.length - index - 1
    }).fill(0) as number[];
    arr.unshift(...zeros);
    return arr;
  });
  const firstNum = nums[0];
  let increase = 0;
  for (let i = 0; i < firstNum.length; i++) {
    let sum = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j][i]) {
        sum += nums[j][i];
      }
    }
    const v = sum + increase;
    increase = Math.floor(v / 10);
    firstNum[i] = v % 10;
  }
  if (increase > 0) {
    firstNum.push(increase);
  }
  return firstNum.reverse().join('');
};