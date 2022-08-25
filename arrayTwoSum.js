// function reverseString(str) {
//     let newString = ''
//     let counter = str.length-1
//     console.log(counter);
//     while(counter  > -1) {
//         console.log(counter);
//         console.log(str[counter]);
//         console.log(newString);
//         newString += str[counter]
//         counter = counter - 1
//     }
//     return newString
// }

// console.log(reverseString('goodbye'));

function palindrome(str) {
  let newStrng = "";
  for (let index = str.length - 1; index >= 0; index--) {
    newStrng += str[index];
    console.log(index);
    console.log(newStrng);
  }
  return newStrng === str;
}

console.log(palindrome("abba"));

function fiftyThirtyTwenty(ati) {
  let tax = { Needs: "", Wants: "", Savings: "" };

  for (key in tax) {
    key === "Needs"
      ? (tax[key] = ati * 0.5)
      : key === "Wants"
      ? (tax[key] = ati * 0.3)
      : key === "Savings"
      ? (tax[key] = ati * 0.5)
      : tax;
  }
  return tax;
}

console.log(fiftyThirtyTwenty(10000));

function nSidedShape(n) {
  const shape = {
    1: "circle",
    2: "semi-circle",
    3: "triangle",
    4: "square",
    5: "pentagon",
    6: "hexagon",
    7: "heptagon",
    8: "octagon",
    9: "nonagon",
    10: "decagon",
  };
  return shape[n];
}
console.log(nSidedShape(2));

function greaterThanOne(frac) {
  return eval(frac) > 1;
}
console.log(greaterThanOne("7/4"));
function reverseInt(n) {
  let newN = n < 0 ? n * -1 : n;
  console.log(n);

  let str = `${newN}`;
  let index = str.length - 1;
  let reverseInt = "";
  console.log(str);
  while (index >= 0) {
    console.log(str);
    reverseInt += str[index];

    index--;
  }
  console.log(newN);
  return n > 0 ? reverseInt : reverseInt * -1;
}

console.log(reverseInt(-51));

function fifth() {
  return arguments.length > 0 ? "Not enough arguments" : typeof arguments[4];
}

function sayWhat(obj) {
  let str = "";
  for (key in obj) {
    str += key;
  }
  return str;
}

function elementSet(s) {
  let newSet = new Set();
  newSet.add(s);
  return newSet;
}

console.log(elementSet(1));

function maxChars(str) {
  let newObj = {};
  let maxChar = 0;
  let maxLetter = " ";
  for (letter of str) {
    console.log(letter);
    newObj[letter]
      ? (newObj[letter] = newObj[letter] + 1)
      : (newObj[letter] = 1);
    if (newObj[letter] > maxChar) {
      maxChar = newObj[letter];
      maxLetter = letter;
    }
  }
  for (number of Object.keys(newObj)) {
    console.log(number);
  }
  console.log(Object.values(newObj));
  console.log(maxLetter && maxChar);
  return maxLetter && maxLetter;
}

console.log(maxChars("heLLLo"));

function fizzBuzz(n) {
  let index = 1;
  while (index <= n) {
    console.log(index % 3);
    index % 3 === 0
      ? console.log("fizz")
      : index % 5 === 0
      ? console.log("fizzbuzz")
      : console.log(index);
    index++;
  }
  return "done";
}

console.log(fizzBuzz(5));
console.log("hello");

function arrayChunk(array, size) {
  let chunked = [];
  let subarray = [];
  for (let item of array) {
    subarray.push(item);
    if (subarray.length === size) {
      chunked.push(subarray);
      subarray = [];
    }
  }
  return chunked;
}

console.log(arrayChunk([1, 2, 3, 4, 5, 6], 2));

function anagrams(stringA, stringB) {
  let obj1 = {};
  let obj2 = {};
  let keys = [];
  let values = [];
  for (letter of stringA) {
    console.log(letter);
    obj1[letter] ? obj1[letter]++ : (obj1[letter] = 1);
  }
  for (letter of stringB) {
    console.log(letter);

    obj2[letter] ? obj2[letter]++ : (obj2[letter] = 1);
  }
  keys.push(Object.keys(obj1));
  keys.push(Object.keys(obj2));
  values.push(Object.values(obj1));
  values.push(Object.values(obj2));
  console.log(keys[0].length === keys[1].length);
  return [obj1, obj2];
}
console.log(anagrams("doog", "god"));

function evenOrOdd(arr) {
  let sum = 0;
  if (arr.length === 1 && arr[0] === 0) return "even";
  for (num of arr) {
    console.log(num);
    sum += num;
  }
  return sum % 2 === 0 ? "even" : "odd";
}

console.log(evenOrOdd([0, 2]));

function helloWorld(num) {
  return num % 3 === 0
    ? "Hello"
    : num % 5 === 0
    ? "World"
    : num % 3 === 0 && num % 3 === 0
    ? "Hello World"
    : "lol";
}

function capitalizeSentance(str) {
  let string = "";
  string += str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      string += str[i].toUpperCase();
    } else string += str[i];
  }
  return string;
}

console.log(capitalizeSentance("a short sentance"));

function ana(str1, str2) {
  let obj1 = {};
  let obj2 = {};
  for (letter of str1) {
    obj1[letter] ? obj1[letter]++ : (obj1[letter] = 1);
  }
  for (letter of str2) {
    obj2[letter] ? obj2[letter]++ : (obj2[letter] = 1);
  }
  for (key in obj1) {
    console.log(key);
    console.log(obj2);
    console.log(obj1[key]);
    if (!(key in obj2)) {
      console.log(key);
      return "false";
    }
    if (obj2[key] !== obj1[key]) {
      console.log(obj2[key]);
      return "false";
    }
  }
  return "true";
}

console.log(ana("doog", "good"));

function countUniqueValues() {
  if (arr.length === 0) return 0;
  let unique = 1;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      unique++;
      i = j;
    }
  }
  return unique;
}

function sameFrequency(num1, num2) {
  let obj1 = {};
  let obj2 = {};
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  for (num of strNum1) {
    console.log(num);
    obj1[num] ? obj1[num]++ : (obj1[num] = 1);
    console.log(obj1);
  }
  for (num of num2.toString()) {
    obj2[num] ? obj2[num]++ : (obj2[num] = 1);
  }
  for (key in obj1) {
    if (!(key in obj2)) return false;
    if (obj2[key] !== obj1[key]) return false;
  }
  console.log(obj1);
  return true;
}
console.log(sameFrequency(121, 211));

function areThereDuplicates(arr) {
  let left = 0;
  let right = arr.length - 1;
  let unique = 1;
  while (left < arr.length) {
    console.log(arr[left]);
    console.log(arr[right]);
    if (arr[left] === arr[right]) {
      console.log(arr[left]);
      console.log(arr[right]);
      unique++;
      return true;
    }
    left++;
    right--;
  }
  return false;
}
console.log(areThereDuplicates([1, 2, 3, 4, 5, 7, 8, 9, 9, 10]));

function averagePair(arr, n) {
  let left = 0;
  let right = arr.length - 1;
  let average = 0;
  while (left < right) {
    average = arr[left] + arr[right] / 2;
    console.log(average);
    if (average === n) {
      console.log(average);
      return true;
      return [arr[left], arr[right]];
    } else if (average < num) left++;
    else right--;
  }
  return false;
}

// function averagePair(arr, num){
//     let start = 0
//     let end = arr.length-1;
//     while(start < end){
//       let avg = (arr[start]+arr[end]) / 2
//       if(avg === num) return true;
//       else if(avg < num) start++
//       else end--
//     }
//     return false;
//   }
console.log(averagePair([1, 2, 3], 3.5));

function maxSumArray(arr, num) {
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    console.log(currentTotal);
    total = Math.max(total, currentTotal);
  }
  return total;
}

console.log(maxSumArray([1, 2, 3, 4, 4, 5, 6, 7], 2));
