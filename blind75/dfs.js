function dfs(graph, source, map = {}, destination) {
  let current = source;

  for (neighbor of graph[current]) {
    console.log(current);
    if (neighbor === destination) return true;
    if (!map[current]) map[current] = [];
    console.log(map);
    map[current].push(neighbor);
    if (!map[neighbor]) return dfs(graph, neighbor, map, destination);
  }
  return false;
}

let graph = {
  a: ["b", "c"],
  b: ["a", "c"],
  c: ["d", "b"],
  d: ["e", "c"],
};

var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    let r = nums.length - 1;
    while (r > i) {
      if (nums[i] + nums[r] === target) return [nums[i], nums[r]];
      // console.log(nums[i]+nums[r])
      r--;
    }
  }
};

console.log(twoSum((nums = [2, 7, 11, 15]), (target = 9)));
console.log(dfs(graph, "a", (map = {}), "d"));
