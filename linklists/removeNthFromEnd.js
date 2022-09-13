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
var removeNthFromEnd = function (head, n) {
  let [current, count] = rev(head);
  let pop = 1;
  let answer = new Node(0);
  let answerHead = answer;
  while (count > 1) {
    console.log(current.value);
    console.log(answer);
    if (pop === n) {
      current = current.next;
    } else {
      answer.next = current;
      answer = answer.next;
      current = current.next;
    }
    ///
    console.log(answer);
    count--;
    pop++;
  }
  return answerHead;
};
function rev(head) {
  let current = head;
  let prev = null;
  count = 0;
  while (current != null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    count++;
  }
  return [prev, count];
}
let list1 = makeList((head = [1, 2, 3, 4, 5]));
console.log(removeNthFromEnd(list1, 2));
