function hasPath(list, root, destination) {
  // let current = list[root]
  // console.log(current)
  console.log(root);
  if (root === destination) return true;
  for (neighbor of list[root]) {
    if (hasPath(list, neighbor, destination) === true) return true;
  }
  return false;
}

function hasPath(list, root, destination) {
  let stack = [root];
  let map = {};
  while (stack.length) {
    let current = stack.shift();
    if (!map[current]) map[current] = [];
    if (current === destination) return true;
    for (neighbor of list[current]) {
      if (map[current]) {
        map[current].push(neighbor);
      }
      if (!map[neighbor]) stack.push(neighbor);
    }
  }

  return false;
}

let adjList = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

console.log(hasPath(adjList, "f", "k"));

var orangesRotting = function (grid) {
  let count = 0;
  let row = grid.length;
  let col = grid[0].length;
  for (i = 0; i < row; i++) {
    for (c = 0; c < col.length; c++) {
      if (grid[i][c] === 2) count += dfs(i, c, grid);
    }
  }
  return count;
};

function dfs(i, c, grid) {
  if (grid[i + 1][c] && grid[i + 1][c] != 1) grid[i + 1][c] = 2;
  if (grid[i - 1][c] && grid[i - 1][c] != 1) grid[i - 1][c] = 2;
  if (grid[i][c + 1] && grid[i][c + 1] != 1) grid[i][c + 1] = 2;
  if (grid[i][c - 11] && grid[i][c - 1] != 1) grid[i][c - 1] = 2;
  dfs(i + 1, c, grid);
  dfs(i - 1, c, grid);
  dfs(i, c + 1, grid);
  dfs(i, c - 1, grid);
  return 1;
}
