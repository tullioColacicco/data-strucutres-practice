function counConnected(graph) {
  let map = {};
  let count = 0;

  for (key in graph) {
    if (!map[key]) count += helper(graph, key, map);
  }
  return count;
}

function helper(graph, node, map) {
  let current = node;

  for (neighbor of graph[current]) {
    if (!map[current]) map[current] = [];
    map[current].push(neighbor);
    if (!map[neighbor]) helper(graph, neighbor, map);
  }
  return 1;
}

let graph = {
  0: [4, 7],
  1: [],
  2: [],
  3: [6],
  4: [0],
  6: [3],
  7: [0],
  8: [],
};

console.log(counConnected(graph));
