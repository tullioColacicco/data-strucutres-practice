var StockSpanner = function () {
  this.stack = [];
  this.index = -1;
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  this.index = this.index + 1; // I need to keep track of the index

  while (
    this.stack.length !== 0 &&
    this.stack[this.stack.length - 1].price <= price
  )
    //As long as the topest stack is ;ess than price then please pop it off. Why? You have to have descending stack which is best for comparism
    this.stack.pop();
  console.log(this.stack);

  if (this.stack.length === 0) {
    this.stack.push({ index: this.index, price: price });
    return this.index + 1; // the length and itself, assume it is at 0 index
  } else {
    let lastItemOnStack = this.stack[this.stack.length - 1];
    this.stack.push({ index: this.index, price: price });

    return this.index - lastItemOnStack.index; // difference in span with the top most part of the stack
  }
};

// var StockSpanner = function() {
//   this.stack = [];
// };

// /**
// * @param {number} price
// * @return {number}
// */
// StockSpanner.prototype.next = function(price) {
//   let span = 1;
//   while (this.stack.length > 0 && this.stack[this.stack.length-1].price <= price) {
//       let popped = this.stack.pop();
//       span += popped.span;
//   }
//   this.stack.push({price: price, span: span});
//   return span;
// };

console.log((stockSpanner = new StockSpanner()));
console.log(
  stockSpanner.next([
    "StockSpanner",
    "next",
    "next",
    "next",
    "next",
    "next",
    "next",
    "next",
  ])
);
console.log(stockSpanner.next(100));
console.log(stockSpanner.next(80));
console.log(stockSpanner.next(60));
console.log(stockSpanner.next(70));

var threeSumClosest = function (nums, target) {
  // TC : O(n^2)
  const n = nums.length;
  nums.sort((x, y) => x - y);
  var result = nums[1] + nums[0] + nums[2];
  for (var i = 0; i < n - 1; i++) {
    var low = i + 1;
    var high = n - 1;

    while (low < high) {
      var sum = nums[i] + nums[low] + nums[high];

      if (target == sum) return sum;

      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum;
      }
      if (sum > target) high -= 1;
      else low += 1;
    }
  }
  return result;
};

console.log(threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5], -2));
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let index = 0;
  let max = 0;
  for (i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[index]);

      index++;
    }

    if (!set.has(s[i])) {
      set.add(s[i]);
    }

    if (set.size > max) max = set.size;
  }
  return max;
};

console.log(lengthOfLongestSubstring("aab"));

const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
let map = new Set(numbers);
map.delete();
console.log(map);
console.log([...new Set(numbers)]);
