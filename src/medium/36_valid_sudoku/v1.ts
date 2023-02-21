function getMap() {
  return {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0
  };
}

function isValidSudoku(board: string[][]): boolean {
  const n = 9;
  const m = 3;
  for (let i = 0; i < n; i++) {
    const map = getMap();
    for (let j = 0; j < n; j++) {
      const v = board[i][j];
      if (v !== '') {
        map[v]++;
        if (map[v] > 1) {
          return false;
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    const map = getMap();
    for (let j = 0; j < n; j++) {
      const v = board[j][i];
      if (v !== '') {
        map[v]++;
        if (map[v] > 1) {
          return false;
        }
      }
    }
  }
  for (let k = 0; k < m; k++) {
    for (let p = 0; p < m; p++) {
      const row = k * m, col = p * m;
      const map = getMap();
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
          const v = board[i + row][j + col];
          if (v !== '') {
            map[v]++;
            if (map[v] > 1) {
              return false;
            }
          }
        }
      }
    }
  }
  return true;
};