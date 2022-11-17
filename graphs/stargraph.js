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
  [1, 2],
  [2, 3],
  [4, 2],
];

let edges2 = [
  [1, 2],
  [5, 1],
  [1, 3],
  [1, 4],
];
let edges3 = [
  [0, 1],
  [1, 2],
  [2, 0],
];
let edges4 = [
  [4, 3],
  [1, 4],
  [4, 8],
  [1, 7],
  [6, 4],
  [4, 2],
  [7, 4],
  [4, 0],
  [0, 9],
  [5, 4],
];

function helper(arr) {
  let map = {};
  for (item of arr) {
    let [first, second] = item;
    if (!map[first]) {
      map[first] = [];
    }
    if (!map[second]) map[second] = [];
    map[first].push(second);
    map[second].push(first);
  }
  return map;
}

var findCenter = function (edges) {
  let list = helper(edges);
  console.log(list);
  for (key in list) {
    if (list[key].length > 1) return key;
  }
};

var validPath = function (n, edges, source, destination) {
  let arr = helper(edges);
  // if(source===destination) return true
  console.log(arr);
  let map = {};

  return pathHelper(arr, source, destination, map) === true;
};

function pathHelper(arr, node, destination, map) {
  if (neighbor === destination) return true;
  for (neighbor of arr[node]) {
    console.log(neighbor === destination);

    if (!map[node]) map[node] = [];
    map[node].push(neighbor);
    console.log(map);
    if (!map[neighbor]) {
      return pathHelper(arr, neighbor, destination, map);
    }
  }
  return false;
}
console.log(findCenter(edges));
console.log(helper(edges));
console.log(helper(edges2));
//  console.log(validPath(3,edges3,0,2))
console.log(validPath(10, edges4, 5, 9));
