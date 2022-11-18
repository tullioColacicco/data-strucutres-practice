var findJudge = function (n, trust) {
  let graph = helper(trust);
  console.log(graph);
};

function helper(arr) {
  let map = {};
  for (item of arr) {
    let [first, second] = item;
    if (!map[first]) {
      map[first] = [];
    }
    if (!map[second]) map[second] = [];
    map[first].push(second);
    map[second].push(first);
  }
  return map;
}

console.log(
  findJudge(
    (n = 3),
    (trust = [
      [1, 3],
      [2, 3],
    ])
  )
);
