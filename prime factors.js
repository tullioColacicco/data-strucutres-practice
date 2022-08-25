// function factors(num) {
//   factorsArr = [];
//   nthPrime = [];
//   for (let i = 2; i <= num; i++) {
//     if (num % i === 0) {
//       factorsArr.push(i);
//     }
//   }
//   for (number of factorsArr) {
//     if (isPrime(number)) {
//       nthPrime.push(number);
//     }
//   }
//   return nthPrime;
// }

// console.log(factors(24));

// function isPrime(number) {
//   if (number < 2) {
//     return false;
//   }
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime());

// function greatestFactor(numbers) {
//   newArr = [];

//   for (let i = 2; i < numbers; i++) {
//     if (numbers % i === 0) {
//       newArr.push(i);
//     }
//   }
//   return Math.max(...newArr);
// }

// console.log(greatestFactor(20));
// function howManyTimes(num) {
//   count = 0;
//   arr = num.split("");

//   for (letter of num) {
//     if (letter === "a") {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(howManyTimes("daaaaaaaaaaad"));

// function additiveInverse(arr) {
//   for (num of arr) {
//     num = -num;
//   }
//   return arr;
// }

// console.log(additiveInverse([1, 2, 3, 4, 5]));

// function removeDuplicates(arr) {
//   newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (newArr[i] != arr[i]) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(removeDuplicates([1, 2, 3, 1, 2, 3]));

// //LEETCODE TWO SUMS
// function twoSums(nums, target) {
//   for (num of nums) {
//     for (num2 of nums) {
//       if (num + num2 === target) return [nums.indexOf(num), nums.indexOf(num2)];
//     }
//   }
// }

// console.log(twoSums([2, 7, 11, 15], 9));

// //DUPLICATES
// function findDuplicates(arr) {
//   empty = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (empty.indexOf(arr[i]) === -1) {
//       console.log(empty.indexOf(arr[i]));
//       empty.push(arr[i]);
//     }
//   }
//   return empty;
// }

// console.log(findDuplicates([2, 2, 1, 1, 2, 2, 2, 2, 2]));

// function loops(arr) {
//   arr2 = [1, 2];
//   arr3 = [1];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr3.length; j++) {
//       if (arr3[j] != arr[i]) {
//         arr3.push(arr[i]);
//       }
//     }
//   }
//   return arr3;
// }
// console.log(loops([1, 2, 2, 3, 3, 4, 3]));

// //rotate array
// function rotate(nums, k) {
//   newArr = nums.slice(-k);
//   newArr.push(nums.slice(0, k + 1));
//   return newArr.join();
// }

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
// //twoArrays leetcode
// function twoArrays(nums1, nums2) {
//   empty = [];

//   for (let i = 0; i < nums1.length; i++) {
//     if (nums2.indexOf(nums1[i]) === true) {
//       empty.push(nums1[i]);
//     }
//   }
//   for (let j = 0; j < nums2.length; j++) {
//     if (empty.indexOf(nums2[j]) === -1) {
//       empty.push(nums2[j]);
//     }
//   }
//   return empty;
// }

// console.log(twoArrays([1, 2, 2, 1], [2, 2]));

// function plusOne(digits) {
//   if (digits.length < 2) {
//     return digits[0] + 1;
//   } else {
//     newDigits = digits.splice(0, digits.length - 1);
//     newDigits.push(digits[digits.length - 1] + 1);
//     return newDigits;
//   }
// }

// console.log(plusOne([9]));

// function reverseString(arr) {
//   newArr = [];
//   for (i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// console.log(reverseString(["h", "e", "l", "l", "o"]));

// function reverseInt(num) {
//   newArr = num.toString().split("");
//   result = [];
//   for (let i = newArr.length - 1; i >= 0; i--) {
//     result.push(newArr[i]);
//   }
//   result = result.join("");
//   result = Number(result);
//   return result;
// }

// console.log(reverseInt(123));

// function getStudentNames(students) {
//   return students.map(student => student.name);
// }
// console.log(
//   getStudentNames([{ name: "Steve" }, { name: "Mike" }, { name: "John" }])
// );

// //LEETCODE FIRSTUNIQUE CHARACTER
// var firstUniqChar = function(s) {
//   let str = s.split("");
//   let dups = str.filter((item, index) => str.indexOf(item) !== index);
//   console.log(dups);
//   for (let i = 0; i < str.length; i++) {
//     if (!dups.includes(str[i])) {
//       return i;
//     }
//   }
//   return -1;
// };
// console.log(firstUniqChar("loveleetcode"));
// //FIRST UNIQUE
// function firstRepeating(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//       return str[i];
//     }
//   }
// }

// console.log(firstRepeating("loveleetcode"));

// function anagram(s, t) {
//   str = s.split("");
//   str2 = t.split("");

//   if (s === "" && t === "") return true;
//   if (s.length != t.length) {
//     return false;
//   }
//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
//     if (!str2.includes(str[i])) {
//       console.log(str[i]);
//       return false;
//     } else return true;
//   }
// }

// console.log(anagram("aad", "dae"));

// function loop(str) {
//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
//   }
// }

// console.log(loop([1, 2, 3, 4]));

// function palindrome(str) {
//   s = str.toLowerCase();
//   s = s.split("");
//   s = s.filter(letter => letter != ":" && letter != "," && letter != " ");
//   n = [];
//   for (let i = s.length - 1; i >= 0; i--) {
//     n.push(s[i]);
//   }
//   s = s.join("");
//   n = n.join("");
//   if (s === n) {
//     return true;
//   }
//   return false;
// }

// console.log(palindrome("A man, a plan, a canal: Panama"));

// function commonPrefix(strs) {
//   let prefix = "";
//   if (strs.length === 0) return prefix;
//   for (let i = 0; i < strs[0].length; i++) {
//     const character = strs[0][i];

//     for (let j = 0; j < strs.length; j++) {
//       if (strs[j][i] != character) {
//         return prefix;
//       }
//     }
//     prefix = prefix + character;
//   }
//   return prefix;
// }

// console.log(commonPrefix(["flower", "flow", "flight"]));

// function profit(info) {
//   cost = info.costPrice;
//   sell = info.sellPrice;
//   inv = info.inventory;
//   totalCost = cost * inv;
//   totalSale = inv * sell;
//   totalProfit = totalSale - totalCost;
//   return Math.round(totalProfit);
//   console.log(info["costPrice"]);
// }

// console.log(
//   profit({
//     costPrice: 32.67,
//     sellPrice: 45.0,
//     inventory: 1200
//   })
// );

// function reverseStr(s) {
//   newStr = s.split("");
//   arr = [];
//   for (i = newStr.length - 1; i >= 0; i--) {
//     arr.push(newStr[i]);
//   }
//   arr = arr.join("");
//   return arr;
// }

// console.log(reverseStr("hello"));

// function truncateString(str, num) {
//   newstr = str.slice(0, num);
//   return newstr + "...";
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// function findElement(arr, func) {
//   for (i = 0; i < arr.length; i++) {
//     num = arr[i];

//     if (func(num)) {
//       return num;
//     }
//   }
//   return undefined;
// }

// // console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))
// console.log(
//   findElement([1, 3, 5, 8, 9, 10], function newNum(num) {
//     return num % 2 === 0;
//   })
// );

// let users = {
//   Alan: {
//     age: 27,
//     online: false
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: false
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function countOnline(obj) {
//   // change code below this line

//   for (user in users) {
//     if (users[user].online) {
//       return user;
//     }
//   }
//   // change code above this line
// }

// console.log(countOnline(users));

const myAtoi = function(str) {
  // if(typeof str[0] === 'string' ) return 0
  filtered = [];
  arr = str.split("");
  // console.log(arr);
  if (arr[0] != " " && !Number(arr[0])) return 0;
  int = arr.filter(item => {
    return item != " ";
  });
  for (ele of int) {
    if (Number(ele) || ele === "-") {
      filtered.push(ele);
    }
  }

  filtered = filtered.join("");
  return Number(filtered);
};

console.log(myAtoi("   -42"));

const arr1 = [
  [1, 2, 3, 4, 5, 5],
  [1, 2, 3, 7, 8, 9]
];
function rmvDuplicates(arr) {
  newArr = {};
  for (num of arr) {
    newArr[num] = true;
  }
  return Object.keys(newArr);
}
console.log(rmvDuplicates(arr1));

const yooo = function demo(arr) {
  return arr.indexOf("he");
};
console.log(yooo(["hello", "goodbye"]));
