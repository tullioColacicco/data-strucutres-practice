function Node(value, next, random) {
  this.value = value;
  this.next = null;
  this.random = random;
}
function makeList(arr) {
  let head = new Node(0);
  let tail = head;
  let list = [];
  for (item of arr) {
    console.log(item[1]);
    let test = new Node(item[0], null, item[1]);
    list.push(test);
    tail.next = test;

    tail = tail.next;
    //   tail.random = item[1]
  }
  let i = 0;
  let current = head.next;
  console.log(list.length);
  while (i < list.length) {
    let index = current.random;
    console.log(index);
    current.random = list[index];
    current = current.next;
    i++;
  }
  return head.next;
}

let arr = makeList([
  [7, null],
  [13, 0],
  [11, 4],
  [10, 2],
  [1, 0],
]);
console.log(arr);
function print(a) {
  current = a;
  while (current != null) {
    console.log(current.random);
    current = current.next;
  }
}
console.log(print(arr));
// var copyRandomList = function(head) {
//     let start = new Node(0,null,null)
//     let copy = start
//     let current = head
//     while(current){
//         let node= new Node(current.value,null,current.random)
//         start.next = node

//         start= start.next
//         current=current.next
//     }
//     return copy
// };

var copyRandomList = function (head) {
  if (!head) {
    return null;
  }

  const map = new Map();

  // Create the copy and map it to the origin
  let origin = head;
  while (origin) {
    const copy = new Node(origin.value, null, origin.random);
    map.set(origin, copy);
    origin = origin.next;
  }
  console.log(map.get(head));
  // Now we have all the unlinked copied nodes
  // Get the next and random from origin then assign it to the copy
  origin = head;
  while (origin) {
    const copy = map.get(origin);
    copy.next = map.get(origin.next) || null;
    origin = origin.next;
  }

  // Just return the copy of the head
  return map.get(head);
};
console.log(copyRandomList(arr));
