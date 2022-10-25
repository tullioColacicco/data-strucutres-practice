var numIslands = function (grid) {
  var DFS = (i, j) => {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[i].length ||
      grid[i][j] != "1"
    )
      return;

    grid[i][j] = "0";
    DFS(i - 1, j); // up
    DFS(i + 1, j); // down
    DFS(i, j - 1); // left
    DFS(i, j + 1); // right
  };
  let r = grid.length;
  let c = grid[0].length;
  let resultCount = 0;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] == "1") {
        DFS(i, j);
        resultCount++;
      }
    }
  }
  return resultCount;
};
