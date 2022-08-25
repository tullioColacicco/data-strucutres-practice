function container(num) {
  let max = 0;
  let left = 0;
  let right = num.length - 1;
  while (left < right) {
    console.log(left, right);
    let min = Math.min(num[left], num[right]) * (right - left);
    min > max ? (max = min) : max;
    let l = right - left;
    console.log(min * l);
    console.log(min);
    num[left] < num[right] ? left++ : right--;
  }
  return max;
}

console.log(container([1, 8, 6, 2, 5, 4, 8, 3, 7]));
