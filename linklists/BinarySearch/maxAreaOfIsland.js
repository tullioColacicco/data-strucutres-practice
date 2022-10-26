var maxAreaOfIsland = function (grid) {
  let max = 0;
  let count = 0;
  let row = grid.length;
  let col = grid[0].length;
  for (i = 0; i < row; i++) {
    for (c = 0; c < col; c++) {
      if (grid[i][c] === 1) {
        count++;
        dfs(i, c, grid);
      }
    }
  }

  return count;
};

function dfs(i, c, grid) {
  if (grid[i] === undefined || grid[i][c] === undefined || grid[i][c] === 0)
    return;
  grid[i][c] = 0;
  dfs(i + 1, c, grid);
  dfs(i - 1, c, grid);
  dfs(i, c + 1, grid);
  dfs(i, c - 1, grid);
}

var numIslands = function (grid) {
  let max = 0;

  let row = grid.length;
  let col = grid[0].length;
  // console.log(row)
  for (let i = 0; i < row; i++) {
    for (let c = 0; c < col; c++) {
      if (grid[i][c] === 1) {
        count++;
        max = Math.max(max, dfs(i, c, grid));
      }
    }
  }
  function dfs(i, c, grid) {
    if (grid[i] === undefined || grid[i][c] === undefined || grid[i][c] === 0)
      return 0;
    grid[i][c] = 0;
    // count++
    // console.log(count)
    // max =  Math.Max(max,count)
    let up = dfs(i + 1, c, grid);
    let down = dfs(i - 1, c, grid);
    let right = dfs(i, c + 1, grid);
    let left = dfs(i, c - 1, grid);

    return 1 + up + down + left + right;
  }
  return max;
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);

console.log(
  numIslands([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);
