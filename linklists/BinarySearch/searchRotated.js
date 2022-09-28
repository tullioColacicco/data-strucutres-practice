var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log(left, mid, right);
    if (nums[mid] === target) return mid;
    if (nums[left] <= nums[mid]) {
      console.log("hit", left, mid, right);
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid - 1;
        console.log("hit", left, mid, right);
      } else left = mid + 1;
    } else {
      console.log();
      if (target >= nums[mid] && target <= nums[right]) {
        console.log("hit", left, mid, right);

        left = mid + 1;
      } else right = mid - 1;
    }
    console.log(left, mid, right);
  }
  return -1;
};

console.log(search((nums = [5, 1, 3]), (target = 3)));
