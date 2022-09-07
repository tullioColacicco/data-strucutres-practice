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
const q = new Node("q");
const r = new Node("r");

a.next = b;
b.next = c;
c.next = d;
q.next = r;
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

function findValue(head, want) {
  let current = head;
  while (current != null) {
    if (current.value === want) return true;
    current = current.next;
  }
  return false;
}

function findIndex(head, index) {
  let current = head;
  let i = 0;
  while (current != null) {
    console.log(i, current.value);
    if (index === i) return current.value;
    current = current.next;
    i++;
  }
  return false;
}
console.log(findIndex(a, 2));
console.log(findValue(a, "e"));
console.log(printList(a));

function Node(value) {
  this.value = value;
  this.next = null;
}

new Node(3);
new Node(8);
new Node(7);
new Node(5);

let first = new Node(1);
let second = new Node(2);
let third = new Node(3);
let fourth = new Node(4);

first.next = second;
second.next = third;
third.next = fourth;

function sumLists(head) {
  let current = head;
  let sum = 0;
  while (current != null) {
    sum += current.value;
    current = current.next;
  }
  return sum;
}

console.log(sumLists(first));
let arr = [1, 2, 4, 5, 6];
// function makeList(arr){
//     for(i=0;i<arr.length;i++){
//         let item = arr[i]
//         let temp =new Node(item)
//         if(temp != arr[0]) arr[i-1].next = arr[i-1]
//         // temp.next
//         console.log(temp)
//     }
// }

function reverseLists(head) {
  let current = head;
  let prev = null;
  while (current != null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

// console.log(reverseLists(a))

function mergeLists(head1, head2) {
  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;
  console.log(tail);
  let count = 0;
  while (current1 != null && current2 != null) {
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count++;
  }
  if (current1 != null) tail.next = current1;
  if (current2 != null) tail.next = current2;

  return head1;
}

console.log(mergeLists(a, q));

function revList(head) {
  let current = head;
  let prev = null;
  while (current != null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

console.log(revList(a));

var mergeTwoLists = function (l1, l2) {
  let nullNode = { val: 0, next: null };
  let prev = nullNode;
  while (l1 && l2) {
    if (l1.val >= l2.val) {
      prev.next = l2;
      l2 = l2.next;
    } else {
      prev.next = l1;
      l1 = l1.next;
    }
    prev = prev.next;
  }
  prev.next = l1 || l2;
  return nullNode.next;
};
function makeList(arr) {
  let head = new Node(0);
  let tail = head;
  for (item of arr) {
    tail.next = new Node(item);
    tail = tail.next;
  }
  return head.next;
}

let l1 = makeList([1, 1, 2]);
let l2 = makeList([1, 2, 3]);
console.log(makeList([1, 2, 3, 4]));

console.log(mergeTwoLists(l1, l2));
