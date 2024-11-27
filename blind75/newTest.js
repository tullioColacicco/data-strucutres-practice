function doubleValues(arr) {
  let answer = arr.map((x) => x * 2);
  return answer;
}

console.log(doubleValues([1, 2, 3, 4]));
doubleValues([1, 2, 3, 4]); // Returns [2, 4, 6, 8]

function filterEvenNumbers(arr) {
  let answer = arr.filter((x) => x % 2 === 0);
  return answer;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

function sumOfNumbers(arr) {
  let answer = arr.reduce((sum, current) => sum + current);
  return answer;
}
console.log(sumOfNumbers([1, 2, 3, 4])); // Returns [2, 4, 6]

function extractNames(arr) {
  let answer = arr.map((x) => x.name);
  return answer;
}

console.log(
  extractNames([
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
  ])
);
// Returns ['Alice', 'Bob']
