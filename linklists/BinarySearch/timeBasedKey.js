var TimeMap = function () {
  this.map = {};
};

TimeMap.prototype.set = function (key, value, timestamp) {
  // console.log(key)
  if (!this.map[key]) {
    this.map[key] = [];
    console.log(this.map);
    this.map[key].push([value, timestamp]);
  } else {
    this.map[key].push([value, timestamp]);
  }
};
TimeMap.prototype.get = function (key, timestamp) {
  let res = "";
  let values = this.map[key];
  // console.log(values)
  let left = 0;
  let right = values.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log(mid);
    // if(values[mid][1]=== timestamp) {
    //     res = values[mid][0]
    //     return res
    // }
    if (values[mid][1] <= timestamp) {
      res = values[mid][0];
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return res;
};
let timeMap = new TimeMap();
// timeMap.set("foo", "bar", 1);
// console.log(timeMap.map['foo'][0][1])
// timeMap.get("foo", 1);
// console.log(timeMap.get("foo", 1))
// console.log(timeMap.get("foo", 3))
// console.log(timeMap.set("foo", "bar2", 4))
// console.log(timeMap.get("foo", 4))
// console.log(timeMap.get("foo", 5))
console.log(timeMap.set("love", "high", 10));
console.log(timeMap.set("love", "low", 20));
console.log(timeMap.map);
console.log(timeMap.get("love", 15));
// console.log(timeMap.get('love',10))
