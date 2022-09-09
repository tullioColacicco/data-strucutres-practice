function Node(value, next) {
  this.value = value;
  this.next = null;
}
let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(1);
let five = new Node(2);
let six = new Node(4);

one.next = two;
two.next = three;

four.next = five;
five.next = six;
function makeList(arr) {
  let head = new Node(0);
  let tail = head;
  for (item of arr) {
    tail.next = new Node(item);
    tail = tail.next;
  }
  return head.next;
}

let list1 = makeList([1, 1, 2]);
console.log();
let list2 = makeList([1, 2, 3]);

var mergeTwoLists = function (l1, l2) {
  let nullNode = { val: 0, next: null };
  let prev = nullNode;
  let arr = [];
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      arr.push(l2.value);
      prev.next = l1;
      prev = l1;
      l1 = l1.next;
    } else {
      arr.push(l1.value);
      prev.next = l2;
      prev = l2;
      l2 = l2.next;
    }
    // prev = prev.next;
  }
  prev.next = l1 || l2;
  return nullNode.next;
};

let sorted = mergeTwoLists(list1, list2);
function printList(head) {
  let current = head;
  while (current != null) {
    console.log(current.value);
    current = current.next;
  }
}
console.log(printList(sorted));
console.log(mergeTwoLists(list1, list2));
