function romanToInt(s: string): number {
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
  const sArr = s.split('');
  let result = 0;
  let i = 0;
  for (; i < sArr.length - 1; i++) {
    const priorRoman = sArr[i] + sArr[i + 1];
    const idx1 = romans.indexOf(sArr[i]);
    const idx2 = romans.indexOf(priorRoman);
    if (idx2 !== -1) {
      i++;
      result += nums[idx2]
    } else {
      result += nums[idx1];
    }
  }
  if (i < sArr.length) {
    result += nums[
      romans.indexOf(sArr[i])
    ];
  }
  return result;
};