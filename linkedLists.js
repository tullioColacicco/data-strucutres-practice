//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;

  while (head) {
    console.log(head.next);
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
};

let list = new ListNode(1);
console.log(list);
console.log(reverseList([1, 2, 3, 4, 5]));

function Node(value, next) {
  this.value = value;
  this.next = null;
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

console.log(a);

function printList(head) {
  let current = head;
  let arr = [];
  while (current != null) {
    arr.push(current.value);
    console.log(current.value);
    current = current.next;
  }
  return arr;
}

console.log(printList(a));
