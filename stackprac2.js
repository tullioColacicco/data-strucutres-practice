var removeKdigits = function (num, k) {
  let stack = [];
  if (k === num.length) return "0";
  for (i = 0; i < num.length; i++) {
    while (k && stack.length && stack[stack.length - 1] > num[i]) {
      stack.pop();
      k--;
    }
    if (stack.length || num[i] !== "0") stack.push(num[i]);
  }

  while (stack.length && k--) stack.pop();

  return stack.length ? stack.join("") : "0";
};

console.log(removeKdigits((num = "112"), (k = 1)));

var addTwoNumbers = function (l1, l2) {
  let stack = [];
  let length = l1 <= l2 ? l1.length : l2.length;

  let [arr1, arr2] = l1.length != l2.length ? addNum(l1, l2) : [l1, l2];

  let carry = 0;
  for (i = arr1.length - 1; i >= 0; i--) {
    let a = arr1[i];
    let b = arr2[i];

    let sum = a + b;
    if (carry) {
      sum += carry;
      carry = false;
    }
    if (sum > 9) {
      let remainder = sum - 10;
      carry = 1;
      stack.unshift(remainder);
    } else stack.unshift(sum);
  }
  return stack;
};

function addNum(l1, l2) {
  let length = l1 >= l2 ? l1.length : l2.length;
  let copy = l1 <= l2 ? l1 : l2;
  let bigger = l1 >= l2 ? l1 : l2;
  while (copy.length != length) {
    copy.unshift(0);
  }
  return [bigger, copy];
}

console.log(addTwoNumbers((l1 = [2, 4, 3]), (l2 = [5, 6, 4])));

console.log(addNum([7, 2, 4, 3], (l2 = [5, 6, 4])));

var find132pattern = function (nums) {
  let stack = [];
  for (i = 0; i < nums.length; i++) {
    if (!stack.length) {
      stack.push(nums[i]);
      continue;
    }
    if (stack.length === 1 && stack[stack.length - 1] < nums[i]) {
      stack.push(nums[i]);
      console.log(stack);
    } else if (
      stack.length === 2 &&
      nums[i] > stack[0] &&
      stack[stack.length - 1] > nums[i]
    ) {
      stack.push(nums[i]);
      console.log(stack);
      return true;
    } else if (stack.length && stack[stack.length - 1] > nums[i]) {
      stack.pop();
      stack.push(nums[i]);
    }
  }
  console.log(stack);
  return false;
};

var find132pattern = function (nums) {
  let m = -Infinity;
  // Initialise a empty stack...
  const stack = [];
  // Run a Loop from last to first index...
  for (let i = nums.length - 1; i >= 0; i--) {
    // If nums[i] is greater than the top element of stack, then pop the element...
    while (nums[i] > stack[stack.length - 1]) {
      console.log(stack);
      m = stack.pop();
    }
    // If m is greater than nums[i], return true...
    if (nums[i] < m) {
      return true;
    }
    // Otherwise, push nums[i] into stack...
    stack.push(nums[i]);
  }
  // If the condition is not satisfied, return false.
  return false;
};

console.log(find132pattern([3, 5, 0, 3, 4]));

function pointers(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    let first = arr[i];
    second = i + 1;
    let right = arr.length - 1;
    if (arr[second] < arr[i]) {
      while (second < right && second < first) {
        second++;
      }
    }
    console.log(arr[second]);
    console.log(first, arr[second], arr[right]);
    while (second < right && arr[right] > arr[i] && arr[right] > arr[second]) {
      right--;
    }
    if (
      arr[i] < arr[second] &&
      arr[second] > arr[right] &&
      arr[right] > arr[i]
    ) {
      console.log(arr[i], arr[second], arr[right]);
      return true;
    }
  }
  return false;
}

console.log(pointers([-2, 1, 2, -2, 1, 2]));
