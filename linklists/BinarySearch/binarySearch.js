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

BinarySearch.prototype.find = function (value) {
  if (this.root === null) return false;
  let current = this.root;
  let found = false;
  while (current && !found) {
    console.log(current.value);
    if (value < current.value) {
      current = current.left;
    } else if (value > current.value) {
      current = current.right;
    } else {
      found = true;
    }
  }
  return current;
};

let tree = new BinarySearch();
tree.insert(10);
tree.insert(9);
tree.insert(7);
tree.insert(5);
tree.insert(11);
tree.insert(13);

console.log(tree.find(15));

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  console.log(right);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else {
      right = mid - 1;
    }
  }
  return -1;
};

console.log(search((nums = [-1, 0, 3, 5, 9, 12]), (target = 3)));
