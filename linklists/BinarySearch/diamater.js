var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  const depth = function (root) {
    if (!root) return 0;
    console.log(root.value);
    let left = depth(root.left);
    let right = depth(root.right);
    console.log(left, right);
    diameter = Math.max(diameter, left + right);
    return (longerSide = Math.max(left, right) + 1);
  };

  depth(root);

  return diameter;
};

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

let tree = new BinarySearch();
function insert(arr) {
  for (item of arr) {
    tree.insert(item);
  }
  return tree;
}

console.log(insert((root = [1, 2, 3, 4, 5])));

let treeNode = new Node(1);
treeNode.left = new Node(2);
treeNode.right = new Node(3);
treeNode.left.left = new Node(4);
treeNode.left.right = new Node(5);
console.log(treeNode);
console.log(diameterOfBinaryTree(treeNode));
