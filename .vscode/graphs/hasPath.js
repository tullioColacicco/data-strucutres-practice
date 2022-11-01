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
