function dfs(graph, source, map = {}, destination) {
  let current = source;

  for (neighbor of graph[current]) {
    console.log(current);
    if (neighbor === destination) return true;
    if (!map[current]) map[current] = [];
    console.log(map);
    map[current].push(neighbor);
    if (!map[neighbor]) return dfs(graph, neighbor, map, destination);
  }
  return false;
}

let graph = {
  a: ["b", "c"],
  b: ["a", "c"],
  c: ["d", "b"],
  d: ["e", "c"],
};

var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    let r = nums.length - 1;
    while (r > i) {
      if (nums[i] + nums[r] === target) return [nums[i], nums[r]];
      // console.log(nums[i]+nums[r])
      r--;
    }
  }
};

// var isPalindrome = function (s) {
//   s = s.replace(/[^0-9a-zA-Z]+/gim, "");
//   s = s.toLowerCase();
//   var l = 0,
//     r = s.length - 1;
//   console.log(s);

//   while (l < r) {
//     if (s.charAt(l) != s.charAt(r)) {
//       return false;
//     }
//     l++;
//     r--;
//   }
//   return true;
// };

function isPalindrome(s) {
  let string = "";
  for (item of s) {
    console.log(item);
    item = item.toLowerCase();
    if (item.toUpperCase() != item) string += item;
  }
  let copy = "";
  for (i = string.length - 1; i >= 0; i--) {
    copy += string[i];
  }
  return string === copy;
}
function Node(value, next) {
  this.value = value;
  this.next = null;
}
let list1 = [1, 2, 4];
let list2 = [1, 3, 4];
function mergeTwoSortedLists(l1, l2) {
  let list1 = makeList(l1);
  let list2 = makeList(l2);
  let head = new Node(0);
  //  console.log(list1.next)
  let current = head;
  while (list1 != null && list2 != null) {
    if (list1.value <= list2.value) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  //  current.next = list1 || list2
  console.log(head.next);
  return head;
}

function makeList(list) {
  let head = new Node(0);
  let current = head;
  for (item of list) {
    let newNode = new Node(item);
    current.next = newNode;
    current = current.next;
  }
  return head.next;
}

function validP(s) {
  let map = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  let stack = [];
  for (item of s) {
    if (!map[item]) {
      stack.push(item);
      console.log(item);
    } else if (map[item]) {
      item;
      let current = stack.pop();
      if (map[item] != current) return false;
    }
  }
  console.log(stack.length);
}

function maxProfit(arr) {
  let min = Infinity;
  let profit = 0;
  for (item of arr) {
    if (item < min) {
      min = item;
    } else if (item > min) {
      profit = Math.max(item - min, profit);
    }
  }
  return profit;
}

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else {
      right = mid - 1;
    }
  }
  return -1;
}

var floodFill = function (image, sr, sc, color) {
  let src = image[sr][sc];
  let map = {};
  // console.log(image[sr][sc])

  dfs(image, sr, sc, color, src, map);
  function dfs(image, row, col, color, source, map) {
    // console.log(row)
    let string = row.toString() + "," + col.toString();
    if (
      image[row] === undefined ||
      image[row][col] === undefined ||
      image[row][col] != source
    )
      return;
    if (map[string] != undefined) return;

    if (image[row][col] === source) image[row][col] = color;
    map[string] = true;
    dfs(image, row + 1, col, color, source, map);
    dfs(image, row - 1, col, color, source, map);
    dfs(image, row, col + 1, color, source, map);
    dfs(image, row, col - 1, color, source, map);
  }
  return image;
};
console.log(
  floodFill(
    (image = [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ]),
    (sr = 1),
    (sc = 1),
    (color = 2)
  )
);

let map = {};
let row = 2;
let col = 3;
map["2,3"] = true;
var hasCycle = function (head) {
  let fast = head;
  while (fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    if (head === fast) return true;
  }
  return false;
};

var canConstruct = function(ransomNote, magazine) {
  let ransomMap = map(ransomNote)
  let magazineMap = map(magazine)
  
  function map(note) {
     let map = {}
     for(letter of note){
         if(!map[letter]) map[letter] = 1
         else{map[letter]+=1}
     }
     return map
  }
     for(key in ransomMap){
         console.log(ransomMap)
         if(!magazineMap[key] || magazineMap[key]< ransomMap[key]) return false
     }
     return true
 };
console.log(row.toString() + "," + col.toString());
console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(maxProfit((prices = [7, 1, 5, 3, 6, 4])));
console.log(validP((s = "(()[]{}")));
console.log(makeList(list1));
console.log(mergeTwoSortedLists(list1, list2));

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(twoSum((nums = [2, 7, 11, 15]), (target = 9)));
console.log(dfs(graph, "a", (map = {}), "d"));
