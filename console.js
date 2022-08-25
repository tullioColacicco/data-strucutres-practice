function hello(string) {
  const vowels = ["a", "e", "i", "o", "u"];

  let counter = 0;
  for (i = 0; i < string.length; i++) {
    for (v = 0; v < vowels.length; i++) {
      if (string[i] === "e") {
        counter++;
      }
      return counter;
    }
  }
}

console.log(hello("hello"));

function reverse(string) {
  let reverseString = "";
  /*   for(i = string.length - 1; i >= 0; i--) {
    reverseString = reverseString + string[i]
  } return reverseString
*/
  let i = string.length - 1;
  while (i >= 0) {
    reverseString = reverseString + string[i];
    i--;
  }
  return reverseString;
}

console.log(reverse(123));
console.log(reverse("wow"));
function nearby(str) {
  let i = 0;
  while (i < str.length - 1) {
    if (str[i] === "a") {
      if (str[i + 1] === "z" || str[i + 2] === "z" || str[i + 3] === "z") {
        return true;
      } else {
        return false;
      }
    }
  }
}
console.log(nearby("abd"));

function sum_two_nums(arr, target) {
  for (i = 0; i < arr.length; i++) {
    for (x = i + 1; x < arr.length; x++) {
      if (arr[i] + arr[x] === target) {
        return [i, x];
      }
    }
  }
}

console.log(sum_two_nums([1, 2, 3, -3], 0));

function arraypair(array, sum) {
  for (i = 0; i < array.length; i++) {
    var first = array[i];
    for (j = i + 1; j < array.length; j++) {
      var second = array[j];

      if (first + second == sum) {
        console.log("First: " + first + " Second " + second);
      } else return console.log("nill");
    }
  }
}

const a = [1, 2, 3, -3];

arraypair(a, 0);

function power(num) {
  if (num === 0) {
    return false;
  }
  while (num % 2 == 0) {
    num /= 2;
  }
  return num === 1;
}

console.log(power(16));

function third(nums) {
  nums.sort();
  return nums[nums.length - 4];
}

function indexArr(str, index) {
  newStr = str.split("");
  result = [];

  for (let i = 0; i < index.length; i++) {
    result.push(newStr[index[i]]);
  }
  return result;
}

console.log(indexArr("abcd", [3, 1, 2, 0]));

function unlucky13(nums) {
  newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 13 != 0) {
      newArr.push(nums[i]);
    }
  }
  return newArr;
}

console.log(unlucky13([91, 286, 416, 884, 1229]), [1229]);

function nextElement(arr) {
  n = arr[1] - arr[0];
  result = "";

  for (i of arr) {
    result = i + n;
  }
  return result;
}

console.log(nextElement([3, 5, 7, 9]));

function filterList(l) {
  newArr = [];
  for (i of l) {
    if (typeof i != "string") {
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(filterList([1, 2, 3, "a", "b", 4]));
