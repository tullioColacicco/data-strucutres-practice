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

var hasCycle = function (head) {
  let set = new Set();
  while (head) {
    if (set.has(head)) {
      return true;
    } else {
      set.add(head);
      head = head.next;
    }
  }
  return false;
};

// function findDuplicate(nums) {
//     let slow = 0;
//     let fast = 0;

//     while (true) {
//         slow = nums[slow];
//         console.log(slow)
//         fast = nums[nums[fast]];
//         console.log(fast)
//         if (slow == fast) {
//             break;
//         }
//     }
//     console.log(slow)
//     let slow2 = 0;

//     while (true) {
//         slow = nums[slow];
//         slow2 = nums[slow2];
//         if (slow == slow2) {
//             break;
//         }
//     }

//     return slow;
// }
var findDuplicate = function (nums) {
  let brr = [];
  for (let num of nums) {
    console.log(num);
    if (brr[num] === true) return num;
    else brr[num] = true;
    console.log(brr);
  }
};

// nums = [1,3,4,2,2]
//       | |

console.log(findDuplicate((nums = [1, 3, 4, 2, 2])));
