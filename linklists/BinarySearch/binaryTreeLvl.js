var levelOrder = function (root) {
  let answer = [];
  let stack = [root];
  console.log(stack.length);
  while (stack.length) {
    let level = [];
    let size = stack.length;
    console.log(size);
    for (i = 0; i < size; i++) {
      let node = stack.shift();
      level.push(node.value);

      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }

    answer.push(level);
  }
  return answer;
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
console.log(insert([3, 9, 20, 15, 7]));
console.log(tree.root);
console.log(levelOrder(tree.root));
