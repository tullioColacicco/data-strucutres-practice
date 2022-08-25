// function reverse(str) {
//   let reversed = "";
//   for (let char of str) {
//     console.log(char);
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// function palindrome(str){
//   let reversed = ''
//   for(let char of str){
//     reversed = char + reversed
//   }
//   if (reversed === str) return true
//   else return false
// }

// function reverseInt(int){
//   const string = int.toString().split('')
//   reversed = ''
//   sign = ''
//   for(let char of string){
//     if (char === '-'){
//       sign = char + sign
//     } else reversed = char + reversed
//     console.log(sign);
//   }
//   if (sign) reversed = sign + reversed
//   return reversed

// }

// console.log(reverseInt(-51));
// console.log(palindrome('abba'));
// console.log(reverse("hello"));

const user = {
  id: "5e98d90fed82b0205c71dd84",
  username: "kaze",
  password: "$2a$12$0XZkgiWAfPgZ.U/SAtm7sOY29/nHnI.hdEAjT5Aqa2o1Ti9kYGqdS",
  cart: [
    {
      _id: "5e8bd53354de4f3f80649793",
      typeOf: "new",
      strain: "new",
      amount: "1",
    },
  ],
  __v: 0,
};

// console.log(user.cart.find(({ _id }) => _id === "5e8bd53354de4f3f80649793"));
function add1(user) {
  const found = user.cart.find(({ _id }) => _id === "5e8bd53354de4f3f80649793");
  // console.log( found.amount ++);
  found.amount === found.amount ++;
  console.log(found);
  console.log("hello");
  return found
}
console.log(add1(user));


const item =  { _id: '5e8bd53354de4f3f80649793',
  typeOf: 'new',
  strain: 'new',
  amount: 1 }

  function change (){
item.strain = 'lol'
return item
  }

  console.log(change());