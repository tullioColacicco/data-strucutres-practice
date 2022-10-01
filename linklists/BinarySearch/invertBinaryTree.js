var invertTree = (root) => {
  const isBaseCase = root === null;
  if (isBaseCase) return root;

  return dfs(root);
};

const dfs = (root) => {
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  console.log(left);
  console.log(right);

  root.left = right;
  root.right = left;

  return root;
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
tree.insert(4);
tree.insert(5);
tree.insert(7);
tree.insert(2);
tree.insert(1);
tree.insert(3);
console.log(tree.root.left);
