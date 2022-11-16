var wallsAndGates = function (rooms) {
  const [rows, cols] = [rooms.length, rooms[0].length];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const isGate = rooms[row][col] === 0;
      if (!isGate) continue;

      dfs(rooms, row, col);
    }
  }
};

const dfs = (rooms, row, col) => {
  const [rows, cols] = [rooms.length, rooms[0].length];

  for (const [_row, _col] of getNeighbors(row, rows, col, cols)) {
    const isPreviousDistanceGreater = rooms[_row][_col] <= rooms[row][col] + 1;
    if (isPreviousDistanceGreater) continue;

    rooms[_row][_col] = rooms[row][col] + 1;

    dfs(rooms, _row, _col);
  }
};
