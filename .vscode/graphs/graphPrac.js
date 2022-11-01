function logGraph(graph, root) {
  console.log(root);
  let map = {};

  if (!map[root]) {
    map[root] = [];
    map[root].push(neightbor);
    for (neightbor of graph[root]) {
      logGraph(graph, neightbor);
    }
  }
}

let nMap = {};
nMap["a"] = [];
nMap["a"].push("1");
console.log(nMap);
let graph = {
  a: ["b", "c"],
  b: ["a", "c"],
  c: ["d", "b"],
  d: ["e", "c"],
};
// console.log(graph['a'])
// console.log(graph[a])
console.log(logGraph(graph, "a"));
