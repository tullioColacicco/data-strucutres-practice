function islandCount(graph) {
  let count = 0;
  let map = {};
  let row = graph.length;
  let size = 10;
  console.log(graph[0]);
  let col = graph[0].length;
  console.log(col);
  for (i = 0; i < row; i++) {
    for (c = 0; c < col; c++) {
      if (graph[i][c] === "1") {
        count++;
        size = Math.min(size, dfs(graph, i, c, map));
        console.log(size);
      }
    }
  }
  return size;
}

function dfs(graph, i, c, map) {
  // if(!map[i]) map[i][c]= true
  if (
    graph[i] === undefined ||
    graph[i][c] === undefined ||
    graph[i][c] === "0"
  )
    return 0;
  graph[i][c] = "0";
  size = 1;
  size += dfs(graph, i + 1, c);
  size += dfs(graph, i - 1, c);
  size += dfs(graph, i, c + 1);
  size += dfs(graph, i, c - 1);
  console.log(size);
  return size;
}

let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

console.log(islandCount(grid));
