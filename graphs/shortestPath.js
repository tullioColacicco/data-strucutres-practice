function shortestPath(graph, start, destination) {
  let map = {};
  let q = [[start, 0]];
  while (q.length) {
    let [node, distance] = q.shift();
    if (node === destination) return distance;
    if (!map[node]) map[node] = [];
    for (neighbor of graph[node]) {
      map[node].push(neighbor);
      if (!map[neighbor]) q.push([neighbor, distance + 1]);
    }
  }
}

function convert(edges) {
  let map = {};
  for (item of edges) {
    let [first, second] = item;
    if (!map[first]) {
      map[first] = [];
    }
    if (!map[second]) {
      map[second] = [];
    }
    map[first].push(second);
    map[second].push(first);
  }
  return map;
}

let edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

let graph = convert(edges);

console.log(graph);
console.log(shortestPath(graph, "w", "z"));
