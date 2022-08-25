var dailyTemperatures = function (temperatures) {
  let stack = [];
  let output = [];
  for (i = 0; i < temperatures.length; i++) {
    while (stack.length && stack[stack.length - 1][0] < temperatures[i]) {
      console.log(stack);
      const [temp, index] = stack.pop();
      output[index] = i - index;
    }

    stack.push([temperatures[i], i]);
  }
  return stack, output;
};

console.log(
  dailyTemperatures((temperatures = [73, 74, 75, 71, 69, 72, 76, 73]))
);

var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let map = {};
  for (i = 0; i < nums2.length; i++) {
    while (stack.length && stack[stack.length - 1] < nums2[i]) {
      let last = stack.pop();
      map[last] = nums2[i];
    }
    stack.push(nums2[i]);
  }
  let answer = [];
  for (num of nums1) {
    if (map[num]) {
      answer.push(map[num]);
    } else answer.push(-1);
  }
  return answer;
};

console.log(nextGreaterElement((nums1 = [4, 1, 2]), (nums2 = [1, 3, 4, 6, 2])));

var nextGreaterElements = function (nums) {
  let stack = [];
  let answer = [];
  let map = {};
  for (i = 0; i < nums.length; i++) {
    while (stack.length && nums[i] > stack[stack.length - 1]) {
      let last = stack.pop();
      map[last] = nums[i];
    }
    stack.push(nums[i]);
  }
  for (item of nums) {
    if (map[item]) answer.push(map[item]);
    else answer.push(-1);
  }
  return answer;
};

console.log(nextGreaterElements([1, 2, 3, 4, 3]));

var dailyTemperatures = function (temperatures) {
  let answer = [...temperatures];
  let stack = [];
  for (i = 0; i < temperatures.length; i++) {
    while (stack.length && stack[stack.length - 1][0] < temperatures[i]) {
      let [temp, index] = stack.pop();

      answer[index] = i - index;
    }

    stack.push([temperatures[i], i]);
  }
  return answer;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
