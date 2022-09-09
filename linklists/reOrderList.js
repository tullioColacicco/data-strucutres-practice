function Node(value, next) {
  this.value = value;
  this.next = null;
}
function makeList(arr) {
  let head = new Node(0);
  let tail = head;
  for (item of arr) {
    tail.next = new Node(item);
    tail = tail.next;
  }
  return head.next;
}
let list1 = makeList([1, 2, 3, 4, 5]);
var reorderList = function (head) {
  let current = head;
  let beg = current;
  let newList = new Node(0);
  // 1,2,3,4,5
  //   |

  function reverse(head) {
    let current = head;

    let prev = null;
    let count = 0;
    while (current != null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      count++;
    }
    return [prev, count];
  }
  let [rev, length] = reverse(head);
  let count = 1;
  console.log(current);
  while (count < length) {
    console.log(current);
    if (count % 2 === 0) {
      console.log(current);
      current.next = current.next;
      current = current.next;
    } else {
      current.next = rev;
      rev = rev.next;
    }
    count++;
  }
  // current.next = null
  return beg;
};

// console.log(reorderList(list1))

function reOrderArray(arr) {
  let answer = [];
  let arrayLength = 0;
  let left = 0;
  let right = arr.length - 1;
  while (arrayLength < arr.length) {
    if (arrayLength % 2 === 0) {
      answer.push(arr[left]);
      left++;
    } else {
      answer.push(arr[right]);
      right--;
    }
    arrayLength++;
  }
  return answer;
}
function reorderListTest(head) {
  let arr = [];
  let current = head;
  while (current != null) {
    arr.push(current.value);
    current = current.next;
  }
  console.log(arr);
  let newHead = new Node(0);
  let tail = newHead;
  let sorted = reOrderArray(arr);
  for (item of sorted) {
    let current = new Node(item);
    tail.next = current;
    tail = current;
  }
  return newHead.next;
}
console.log(reorderListTest(list1));
console.log(reOrderArray((head = [1, 2, 3, 4])));
