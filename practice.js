// function anagrams(str1,str2) {
// let obj1 = {}
// let obj2 = {}
// for(key of str1) {
//     obj1[key] ? obj1[key] ++ : obj1[key] =1

// }
// for(key of str2) {
//     obj2[key] ? obj2[key] ++ : obj2[key] =1

// }
// for(key in obj1) {
//     if(!(key in obj2)) {
//         return false
//     } if(obj2[key]!== obj1[key]) return false
// }

// return true
// }

// console.log(anagrams('dog','god'));

// function steps(n, i=1){
//         if (i >n) return

//     console.log('#'.repeat(i) + ' '.repeat(n-1))
//     steps(n, i+1)
//  return

// }

// function power(n1,n2) {
//     if (n2 === 0) return 1
//     console.log(n2);
//     console.log(n1);
//     return n1 * power(n1, n2-1)
// }

// console.log(power(2,4));
// console.log(steps(4));

// function linearSearch(arr,value){
//    for (let index = 0; index < arr.length; index++) {
//       if (arr[index] === value ) return index

//    } return -1
// }

// function binarySearch(arr,value){
//    let start = 0
//    let end = arr.length -1
//    let middle = Math.floor((start + end )/2)
//    while(arr[middle]!== value && start <=end){

//        if(value<arr[middle]){
//            end = middle -1
//        } else {
//            start = middle +1
//        }
//         middle = Math.floor((start + end )/2)
//     }
//     if(arr[middle] === value) {
//         return middle
//     }else return -1
//    }

// console.log(binarySearch([1,2,3,4,5,6,7,8],2));
// console.log(linearSearch([10,15,22,34,3,5,1,2,3,7,6,8,5,],15));

function binaryPrac(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === num) return middle;

    if (arr[middle] < num) start = middle + 1;

    if (arr[middle] > num) end = middle - 1;
  }
  return -1;

  //
}

console.log(binaryPrac([1, 2, 3, 4, 4, 5, 5, 6, 7], 2));

function binPrac(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let middle;
  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    if (arr[middle] === num) return middle;
    if (arr[middle] < num) start = middle + 1;
    if (arr[middle] > num) end = middle - 1;
  }
  return -1;
}

console.log(binPrac([1, 2, 3, 4, 4, 5, 5, 6, 7], 7));

function bubbleSort(arr) {
  let noSwap;
  const swap = (arr, indx1, indx2) => {
    [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
      if (noSwap) break;
      console.log(noSwap);
    }
  }
  return arr;
}

console.log(bubbleSort([1, 2, 6, 5]));

// function selectionSort(arr){

//       const swap =(arr, indx1, indx2)=>{
//           [arr[indx1], arr[indx2]]=[arr[indx2], arr[indx1]]
//       }

//       for(let i = 0;i<arr.length;i++){
//    let lowest = i
//           for(let j = i+1;j<arr.length ;j++){
//               console.log(arr,arr[j],arr[j+1]);
//               if(arr[lowest]> arr[j]){

//               lowest = j

//               }
//           }
//           if(i !== lowest)  swap(arr,i,lowest)

//       } return arr

//   }

//   console.log(selectionSort([0,2,34,22,10,19,17]));

function mergeArrays(arr1, arr2) {
  let newArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      console.log(i);
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  return newArr;
}

console.log(mergeArrays([1, 10, 20, 50], [8, 99, 24, 54, 100]));

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let ansArr = [];
  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] <= arr2[j] || j >= arr2.length) {
      ansArr.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j] || i >= arr1.length) {
      ansArr.push(arr2[j]);
      j++;
    }
  }
  return ansArr;
}

function secret(text) {
  let newText = text.split("*");
  let html = `<${newText[0]}>` + `</${newText[0]}>`;
  return html.repeat(newText[1]);
}

console.log(secret("div*2"));

function countDs(sentence) {
  let count = {};
  for (letter of sentence.toLowerCase()) {
    count[letter] ? count[letter]++ : (count[letter] = 1);
  }
  return count["d"];
}

console.log(countDs("My friend Dylan got distracted at school"));

function otherSides(length) {
  let list = [];
  let hype = length * Math.sqrt(3) * 1;
  console.log(typeof hype);

  list.push(length * 2);
  list.push(hype.toFixed(2));
  return list;
}
console.log((otherSides(3), [6, 5.2]));

function isBoiling(temp) {
  let temp1 = "";
  let f = false;
  let c = "";
  for (letter of temp) {
    if (letter !== "F" && letter !== "C") temp1 += letter;
    if (letter === "F") f = temp1;
    if (letter === "C") c = temp1;
  }
  if (f) {
    c = (5 / 9) * (f - 32);
  }
  return c >= 100;
}

console.log(isBoiling("100C"));

function squaresSum(n) {
  // console.log(n);
  // if (n = 1)return 1
  let end = n;
  let start = 1;
  let sum = 0;
  while (end >= start) {
    console.log(start);
    sum += start ** 2;
    start = start + 1;
  }
  return sum;
}

console.log(squaresSum(3));

function uploadCount(dates, month) {
  let list = [
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Apr",
    "Mar",
    "May",
    "Jun",
    "Jul",
    "Aug",
  ];
  let x = "";
  let count = 0;
  for (start of list) {
    console.log(start);
    if (month.startsWith(start)) x = start;
  }
  console.log(x);
  for (date of dates) {
    console.log(date);
    if (date.startsWith(x)) count++;
  }
  return count;
}
console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept"));

function getRandomInt(max) {
  let array = [];

  for (let index = 0; index < 8; index++) {
    array.push(Math.floor(Math.random() * max) + 1);
    console.log(array);
  }
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(7));
