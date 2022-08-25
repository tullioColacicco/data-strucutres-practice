function countUppercase(str) {
  let newstr = str.join("");
  let alpha = ["a", "b", "c"];
  let newObj = {};
  let count = 0;
  for (letter of alpha) {
    newObj[letter] = letter;
  }
  for (a of newstr) {
    if (newObj[a] === a) count += 1;
  }

  return count;
}

// function isValidSudoku (board) {
//   let arr = []
//   console.log(board[1].length);
//   for(i=0;i<9;i++){
//     for(j=0;j<=9;j+3){
//       console.log(board[i][j]);
//     }
//     // arr.push(board[i].slice(i,i+3))
//   console.log(arr);
// };

// }

// console.log(isValidSudoku([
//  ["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]));
// // Take last 7 characters and only return odd positioned ones.
// var twoSum = function(numbers, target) {
//   let map = {}
//   let count = 2
//   let answer = []
//     for(i=0;i<numbers.length;i++){
//       console.log( map[target - numbers[i]]);
//       if(map[target - numbers[i]] || map[target - numbers[i]] === 0) {
//         answer = [map[target - numbers[i]] + 1, i + 1]
//     } else {
//         map[numbers[i]] = i;
//     }

//     }
//     console.log(count);
//     return answer
// };

var threeSum = function (nums) {
  let answer = [];
  let arr = nums.sort((a, b) => a - b);
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) continue;
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      let sum = nums[left] + nums[right] + nums[i];
      if (sum === 0) {
        answer.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        while (nums[left] == nums[left - 1]) {
          left++;
        }

        while (nums[right] == nums[right + 1]) {
          right--;
        }
      }

      if (sum > 0) {
        right--;
      }
      if (sum < 0) {
        left++;
      }
    }
  }
  return answer;
};
console.log(threeSum([-2, 0, 1, 1, 2]));
console.log(countUppercase());

const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// sort by value
items.sort(function (a, b) {
  return a.value - b.value;
});

// sort by name
items.sort(function (a, b) {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

console.log(items);
