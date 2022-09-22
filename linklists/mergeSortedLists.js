function Node(value, next) {
  this.value = value;
  this.next = null;
}

function makeList(arr) {
  const head = new Node(0);
  let current = head;
  for (item of arr) {
    let newNode = new Node(item);
    current.next = newNode;
    current = newNode;
  }

  return head.next;
}

function makeArr(linkedL) {
  let current = linkedL;
  let arr = [];
  while (current != null) {
    arr.push(current.value);
    current = current.next;
  }
  return arr;
}
var mergeKLists = function (lists) {
  if (!lists.flat().length) return [];
  if (!lists.length) return [];
  let arr = [];
  for (list of lists) {
    let array = makeArr(list);
    arr.push(array);
  }
  arr = arr.flat();
  arr = arr.sort((a, b) => a - b);

  let linked = makeList(arr);
  return linked;
};

let a = makeList([1, 4, 5]);
let b = makeList([1, 3, 4]);
let c = makeList([2, 6]);
console.log(makeArr(a));
console.log(makeList([1, 4, 5]));
console.log(mergeKLists([a, b, c]));
console.log(mergeKLists([[]]));
