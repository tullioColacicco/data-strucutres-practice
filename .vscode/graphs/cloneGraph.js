// Definition for a Node.
function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

var cloneGraph = function (node) {
  if (!node) return null;
  let array = [];
};

var cloneHelper = function (node, array) {
  let newNode = new Node(node.val);
  array[node.val] = newNode;
  for (neighbor of node.neighbors) {
    if (!array[neighbor.val]) {
      let newNeighbor = cloneHelper(neighbor, array);
      newNode.neighbors.push(newNeighbor);
    } else {
      let newNeighbor = array[neighbor.val];
      newNode.neighbors.push(newNeighbor);
    }
  }
  return newNode;
};
