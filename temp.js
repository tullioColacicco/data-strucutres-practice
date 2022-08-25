function twoSum(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  let obj = {};
  let answer = [];
  for (i = 0; i < numbers.length; i++) {
    // if(numbers[i-1]===numbers[i]) continue
    let left = i + 1;
    let right = numbers.length - 1;

    while (left < right) {
      sum = numbers[i] + numbers[left] + numbers[right];

      if (sum === 0) {
        let str = [numbers[i], numbers[left], numbers[right]].toString();
        if (!obj[str]) answer.push([numbers[i], numbers[left], numbers[right]]);
        obj[str] = 1;

        left++;
        right--;
      }
      if (sum > 0) right--;
      if (sum < 0) left++;
    }
  }
  return answer;
}
console.log(twoSum([-1, 0, 1, 2, -1, -4]));

function threeSum(arr) {
  let numbers = arr.sort((a, b) => a - b);
  let answer = [];
  let obj = {};
  for (i = 0; i < numbers.length; i++) {
    let left = i + 1;
    let right = numbers.length - 1;

    while (left < right) {
      let sum = numbers[i] + numbers[left] + numbers[right];
      console.log(sum);
      if (sum === 0) {
        let str = [numbers[i], numbers[left], numbers[right]].toString();
        if (!obj[str]) answer.push([numbers[i], numbers[left], numbers[right]]);
        obj[str] = 1;
        left++;
        right--;
      }
      if (sum > 0) right--;
      if (sum < 0) left++;
    }
  }
  console.log(obj);
  return answer;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
