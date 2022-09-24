var minEatingSpeed = function (piles, h) {
  let [left, right] = [1, Math.max(...piles)];
  let min = false;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let hours = getHours(piles, mid);
    console.log(hours);

    if (hours <= h) {
      right = mid;
    } else {
      left = mid + 1;
    }

    console.log(left, right, mid);
  }
  return right;
};
function getHours(piles, mid) {
  let hours = 0;
  for (pile of piles) {
    let result = Math.ceil(pile / mid);
    console.log(result);
    hours += result;
  }
  return hours;
}
console.log(Math.floor((5 + 4) / 2));
console.log(getHours([3, 6, 7, 11], 6));
console.log(minEatingSpeed((piles = [3, 6, 7, 11]), (h = 8)));
