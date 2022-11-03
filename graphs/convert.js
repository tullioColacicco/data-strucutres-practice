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

function big(graph, node, destination) {
  let map = {};
  return undirectedPath(graph, node, destination, map);
}

function undirectedPath(graph, node, destination, map) {
  let current = node;
  console.log(map);
  if (current === destination) return true;
  for (neighbor of graph[current]) {
    if (!map[current]) map[current] = [];
    map[current].push(neighbor);
    if (!map[neighbor]) {
      if (undirectedPath(graph, neighbor, destination, map)) return true;
    }
  }
  return false;
}

let edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

console.log(convert(edges));
let adjList = convert(edges);

console.log(big(adjList, "k", "o"));
