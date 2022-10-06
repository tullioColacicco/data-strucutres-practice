function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearch() {
  this.root = null;
}

BinarySearch.prototype.insert = function (value) {
  const newNode = new Node(value);
  if (this.root === null) {
    this.root = newNode;
    return this;
  } else {
    let current = this.root;
    console.log(current.value);
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }
};

var maxDepth = function (root) {
  let stack = [[root, (level = 0)]];
  let maxdepth = 0;
  while (stack.length > 0) {
    let [node, level] = stack.pop();
    maxdepth = Math.max(maxdepth, level);
    if (node != null) {
      if (node.left != null) stack.push([node.left, level + 1]);
      if (node.right != null) stack.push([node.right, level + 1]);
    }
  }

  return maxdepth;
};

let tree = new BinarySearch();
function insert(arr) {
  for (item of arr) {
    tree.insert(item);
  }
  return tree;
}
console.log(insert([3, 1, 20, 15, 7]));
console.log(maxDepth(tree.root));
