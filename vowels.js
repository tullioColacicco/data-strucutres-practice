// function vowels(string) {
//   let vowel = {
//     a: 0,
//     e: 0,
//     i: 0,
//     o: 0,
//     u: 0,
//   };

//   for (let letter of string) {
//     console.log(vowel[letter]);
//     if (vowel[letter]) {
//       console.log(letter);
//       vowel[letter] = 1
//       console.log(vowel[letter]);
//     }
//   }
//   return vowel
// }

function vowel(string) {
  let count = 0;

  const vowels = ["a", "e", "i", "o", "u"];
  for (let letter of string) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}
console.log(vowel("hello"));
