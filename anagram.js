function anagrams(stringA, stringB) {
  const map1 = buildCharMap(stringA);
  const map2 = buildCharMap(stringB);
  if (Object.keys(map1).length != Object.keys(map2).length) return false;
  for (let key in map1) {
    if (map1[key] != map2[key]) return false;
  }
  return true;
}

function buildCharMap(string) {
  const charMap = {};

  for (let char of string.split(" ").join("").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

// const string = 'hello there'
const object = { a: 1, b: 1, c: 1 };
// console.log(string.split(' ').join(''));
// function loop(obj){
//     for(let char in obj) {
//         console.log(object[char]);
//     }
// };
// console.log(loop(object));

function anagrams2(stringA, stringB) {
  const sorted1 = stringA
    .split("")
    .filter((item) => item != " ")
    .sort()
    .join("");
  console.log(sorted1);
  const sorted2 = stringB
    .split("")
    .filter((item) => item != " ")
    .sort()
    .join("");
  console.log(sorted2);
  if (sorted1 === sorted2) return true;
  return false;
}

console.log(anagrams("rail safety", "fairy tales"));
console.log(anagrams("RAIL SAFETY", "fairy tales"));
console.log(anagrams("HI THERE", "BYE THERE"));
console.log(anagrams("rail safety", "fairy tales"));

console.log(anagrams2("rail safety", "fairy tales"));
