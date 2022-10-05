// var invertTree = (root) => {
//   console.log(root)
//   const isBaseCase = root === null;
//   if (isBaseCase) return root;

//   return dfs(root);
// };
//stack
var invertTree = (root) => {
  let stack = [root];
  while (stack.length > 0) {
    console.log(stack);
    let node = stack.pop();
    if (node != null) {
      let temp = node.left;
      node.left = node.right;
      node.right = temp;
      stack.push(node.right);
      stack.push(node.left);
    }
  }
  return root;
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
function insert(arr) {
  for (item of arr) {
    tree.insert(item);
  }
  return tree;
}
tree.insert(4);
tree.insert(5);
tree.insert(7);
tree.insert(2);
tree.insert(1);
tree.insert(3);
// console.log(insert([4,2,7,1,3,6,9]))
console.log(tree.root.right);
// let rev = invertTree(tree)
console.log(invertTree(tree.root));
// console.log(rev.root.right)
