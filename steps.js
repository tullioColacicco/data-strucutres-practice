// function steps(number) {
//   let stair = "";
//   let stairs = 0;
//   let space = " ";
//   let hash = "#";
//   while (stairs <= number) {
//     let hashes = hash.repeat(stairs + 1);
//     let spaces = space.repeat(number - stairs);

//     let line = hashes + spaces;

//     stairs++;

//     console.log(line);
//   }
// }
// console.log(steps(3));

// function pyramid(number) {
//   for (let row = 0; row < number; row++) {
//     let stair = "";

//     for (let column = 0; column < number; column++) {
//       if (column <= row) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }

// console.log(pyramid(3));

console.log(steps(3));
