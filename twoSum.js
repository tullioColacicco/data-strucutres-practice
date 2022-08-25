// var twoSum = function(numbers, target) {
// let start = 0, end = numbers.length-1
// while(start<end){
//     let sum = numbers[start]+numbers[end]
//     if(sum>target) end-=1
//     if(sum<target)start+=1
//     if(sum=== target) return [start,end]
// }

// };
// console.log(twoSum([2,7,11,15],9))

var twoSum = function (numbers) {
  numbers = numbers.sort((a, b) => a - b);

  let answer = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] === numbers[i - 1]) continue;

    let start = i + 1,
      end = numbers.length - 1;
    while (start < end) {
      let sum = numbers[i] + numbers[start] + numbers[end];
      if (sum === 0) {
        answer.push([numbers[i], numbers[start], numbers[end]]);
        start++;
        end--;
        while (numbers[start] === numbers[start - 1]) {
          start++;
        }
        while (numbers[end] === numbers[end + 1]) {
          end--;
        }
      }

      if (sum > 0) end -= 1;
      if (sum < 0) start += 1;
    }
  }

  return answer;
};

console.log(twoSum([-1, 0, 1, 2, -1, -4]));
