function Node(key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
}

function DoubleLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoubleLinkedList.prototype.push = function (key, value) {
  let node = new Node(key, value);
  console.log(node);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  this.length++;
  return node;
};

DoubleLinkedList.prototype.remove = function (node) {
  //if node  length is 1
  if (!node.next && !node.prev) {
    this.head = null;
    this.tail = null;
  }
  // if node is the tail
  else if (!node.next) {
    this.tail = node.prev;
    this.tail.next = null;
  }
  // if node is the head
  else if (!node.prev) {
    this.head = node.next;
    this.head.prev = null;
  } else {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }
};
let map = {
  a: 1,
};

let double = new DoubleLinkedList();

function LRUCache(capacity) {
  this.DoubleLinkedList = new DoubleLinkedList();
  this.map = {};
  this.capacity = capacity;
}
LRUCache.prototype.get = function (key) {
  if (!this.map[key]) return -1;
  console.log(this.map[key]);
  const value = this.map[key].value;
  this.DoubleLinkedList.remove(this.map[key]);
  this.map[key] = this.DoubleLinkedList.push(key, value);
  return value;
};
LRUCache.prototype.put = function (key, value) {
  if (this.map[key]) this.DoubleLinkedList.remove(this.map[key]);
  this.map[key] = this.DoubleLinkedList.push(key, value);
  if (this.DoubleLinkedList.length > this.capacity) {
    const head = this.DoubleLinkedList.head.key;
    delete this.map[head];
    this.DoubleLinkedList.remove(this.DoubleLinkedList.head);
  }
};
console.log(double.push("a", 1));
console.log(double.push("b", 2));
console.log(double);

let lru = new LRUCache(3);

lru.put("a", 1);
lru.put("b", 2);
lru.put("c", 3);
lru.put("d", 4);
console.log(lru.DoubleLinkedList);
console.log(lru.map);
console.log(lru.get("a"));
console.log(lru.map);
