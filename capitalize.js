function captitalizeFirstLetter(string) {
  let result = string[0].toUpperCase();
  for (let i = 1; i < string.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}
function captitalize(string) {
  const splitArray = string.split(" ");

  let finishedSentance = [];
  for (let word of splitArray) {
    let upperCaseWords = word[0].toUpperCase();

    const restOfSentance = word.slice(1);

    finishedSentance.push(upperCaseWords + restOfSentance);
  }
  return finishedSentance.join(" ");
}

console.log(captitalize("a short sentence"));
