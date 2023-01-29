function intToRoman(num: number): string {
  if (num <= 0) {
    return '';
  }
  let result = '';
  const nums = [
    1,
    4,
    5,
    9,
    10,
    40,
    50,
    90,
    100,
    400,
    500,
    900,
    1000
  ];
  const romans = [
    'I',
    'IV',
    'V',
    'IX',
    'X',
    'XL',
    'L',
    'XC',
    'C',
    'CD',
    'D',
    'CM',
    'M'
  ];
  const maxNum = Math.max(...nums);
  const maxRoman = romans[romans.length - 1];
  while (num > 0) {
    if (num >= maxNum) {
      result += maxRoman;
      num -= maxNum;
      continue;
    }
    for (let i = 0; i < nums.length - 1; i++) {
      if (num >= nums[i] && num < nums[i + 1]) {
        result += romans[i];
        num -= nums[i];
      }
    }
  }
  return result;
};