function largestConnection(graph) {
  let map = {};
  let count = 0;
  for (key in graph) {
    // console.log(key)
    if (!map[key]) count = Math.max(count, helper(graph, key, map));
  }

  return count;
}

function helper(graph, node, map) {
  let current = node;
  let size = 1;
  for (neighbor of graph[current]) {
    if (!map[current]) map[current] = [];
    map[current].push(Number(neighbor));
    if (!map[Number(neighbor)]) size += helper(graph, Number(neighbor), map);
  }
  return size;
}

let graph = {
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
};
console.log(largestConnection(graph));
