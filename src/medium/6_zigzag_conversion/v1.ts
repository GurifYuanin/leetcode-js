function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  const arr: string[][] = Array.from({
    length: numRows
  }).map(() => ([]));
  let i = 0, j = 0, isDown = true;
  for (const c of s) {
    arr[j][i] = c;
    if (j === 0) {
      isDown = true;
    } else if (j === numRows - 1) {
      isDown = false;
    }
    if (isDown) {
      j++;
    } else {
      j--;
      i++;
    }
  }
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += arr[i].filter(Boolean).join('');
  }
  return result;
};