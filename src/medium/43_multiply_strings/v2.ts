function multiply(num1: string, num2: string): string {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }
  const result = Array.from({
    length: num1.length + num2.length
  }).fill(0) as number[];
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      const valueIndex = i + j;
      const increaseIndex = valueIndex + 1;
      const sum = Number(num1[i]) * Number(num2[j]) + result[increaseIndex];
      result[valueIndex] += Math.floor(sum / 10);
      result[increaseIndex] = sum % 10;
    }
  }
  let i = 0;
  while(result[i] === 0) {
    i++;
  }
  return result.slice(i).join('');
}