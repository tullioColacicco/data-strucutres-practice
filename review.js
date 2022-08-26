var isValid = function (s) {
  let stack = [];
  let map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (item of s) {
    console.log(stack);
    if (map[item]) {
      let last = stack.pop();
      console.log(last);
      console.log(last);
      if (last != map[item]) return false;
    } else {
      stack.push(item);
    }
  }
  return stack.length === 0;
};

console.log(isValid("()[]{}"));

var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let map = {};
  for (i = 0; i < nums2.length; i++) {
    let current = nums2[i];
    let top = stack[stack.length - 1];
    console.log(stack);
    while (stack.length && top < current) {
      let popped = stack.pop();
      map[popped] = current;
    }

    stack.push(current);
  }
  return map;
};

console.log(nextGreaterElement((nums1 = [4, 1, 2]), (nums2 = [1, 3, 4, 2])));

var backspaceCompare = function (s, t) {
  let a = str(s);
  let b = str(t);
  function str(s) {
    let stack = [];

    for (i = 0; i < s.length; i++) {
      if (stack.length && s[i] === "#") {
        stack.pop();
      } else if (s[i] != "#") stack.push(s[i]);
    }
    return stack;
  }
  return a.join("") === b.join("");
};

console.log(backspaceCompare((s = "ab#c"), (t = "ad#c")));

var removeDuplicates = function (s) {
  let stack = [];
  for (i = 0; i < s.length; i++) {
    if (stack.length && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else if (s[i] != stack[stack.length - 1]) {
      stack.push(s[i]);
    }
  }
  return stack.join("");
};

console.log(removeDuplicates((s = "abbaca")));

var buildArray = function (target, n) {
  let arr = [];
  for (i = 1; i <= n; i++) {
    arr.push(i);
  }
  let stack = [];
  let copy = [];
  console.log(target.includes());
  for (i = 1; i <= arr.length; i++) {
    if (target.includes(i)) {
      copy.push(i);
      stack.push("Push");
    } else if (!target.includes(i)) stack.push("Push", "Pop");
    if (copy.join() === target.join()) return stack;
  }
  return stack;
};

console.log(buildArray((target = [1, 3]), (n = 3)));

var finalPrices = function (prices) {
  let stack = [];
  let answer = [...prices];
  for (i = 0; i < prices.length; i++) {
    while (stack.length && stack[stack.length - 1].price > prices[i]) {
      let top = stack.pop();
      answer[top.index] = top.price - prices[i];
    }
    stack.push({ price: prices[i], index: i });
    console.log(stack);
  }
  return answer;
};
console.log(finalPrices([8, 4, 6, 2, 3]));

var simplifyPath = function (path) {
  let split = path.split("/");
  console.log(split);
  let stack = [];
  for (item of split) {
    if (item === "" || item === ".") continue;
    if (item === "..") stack.pop();
    else stack.push(item);
  }
  return stack.map((x) => "/" + x).join("");
};

console.log(simplifyPath("/home//foo/"));

var calculate = function (s) {
  let stack = [];
  let operator = "+";
  for (item of s) {
    if (!isNaN(item) && operator === "+") stack.push(item * 1);
    if (!isNaN(item) && operator === "-") stack.push(item * -1);
    if (!isNaN(item) && operator === "*") stack.push(stack.pop() * (item * 1));
    if (!isNaN(item) && operator === "/")
      stack.push(Math.trunc(stack.pop() / (item * 1)));

    if (item === "+") operator = "+";
    if (item === "-") operator = "-";
    if (item === "*") operator = "*";
    if (item === "/") operator = "/";
  }
  if (stack.length === 1) return stack[0];
  return stack.reduce((a, b) => a + b);
};

console.log(calculate("3-1*4+2*2"));
console.log(calculate("3/2"));
console.log(calculate("3+5/2"));

console.log(Math.floor(3 / 2));
