function convert(edges) {
  let map = {};
  for (item of edges) {
    let [first, second] = item;
    if (!map[first]) {
      map[first] = [];
      console.log(map[first]);
    }
    if (!map[second]) {
      map[second] = [];
    }
    map[first].push(second);
    map[second].push(first);
    console.log(map);
  }
  return map;
}

let edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

console.log(convert(edges));
