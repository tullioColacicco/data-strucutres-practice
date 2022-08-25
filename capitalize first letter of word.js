function capatilalize(str) {
  let temp = str.split(" ");

  const result = temp.map(word => {
    capLetter = word[0].toUpperCase();
    let comp = word.replace(word[0], capLetter);
    return comp;
  });
  hey = result.join(" ");
  return hey;
}

console.log(capatilalize("this is a sentenance"));

function firstL(str) {
  string = str.split(" ");
  i = 0;
  while (i < string.length) {
    string[i] = string[i][0].toUpperCase();
    i++;
  }
  return string;
}

console.log(firstL("this is a sentenance"));

const arrayOfWords = ["the", "quick", "brown", "fox"];
i = 0;
while (i < arrayOfWords.length) {
  arrayOfWords[i] = arrayOfWords[i][0].toUpperCase();
  i++;
}

console.log(arrayOfWords);
