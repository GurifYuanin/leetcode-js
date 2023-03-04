/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const n = matrix.length;
  for (let i = 0; i < n / 2; i++) {
    for (let j = i; j < n - i - 1; j++) {
      let currentValue = matrix[i][j];
      for (let direction = 0; direction < 4; direction++) {
        let nextRow, nextColumn;
        switch(direction) {
          case 0: {
            nextRow = j;
            nextColumn = n - 1 - i;
            break;
          }
          case 1: {
            nextRow = n - 1 - i;
            nextColumn = n - 1 - j;
            break;
          }
          case 2: {
            nextRow = n - 1 - j;
            nextColumn = i;
            break;
          }
          case 3: {
            nextRow = i;
            nextColumn = j;
            break;
          }
        }
        const tmp = matrix[nextRow][nextColumn];
        matrix[nextRow][nextColumn] = currentValue;
        currentValue = tmp;
      }
    }
  }
};