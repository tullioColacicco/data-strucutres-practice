var NestedIterator = function (nestedList) {
  this.nestedList = nestedList;
  this.stack = [];
  this.answer = [];
  for (i = 0; i < this.nestedList.length; i++) {
    let item = this.nestedList[i];
    if (isNaN(item)) {
      item.map((x) => this.stack.push(x));
    } else this.stack.push(item);
  }
};

console.log();
/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  if (this.stack.length) return true;
  return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  console.log(this.stack);
  return this.stack.shift();
};
// TEST !!!!!!!!!!!!

// var nest =new NestedIterator( nestedList = [[1,1],2,[1,1]])
// console.log(nest.next());
// console.log( NestedIterator( nestedList = [[1,1],2,[1,1]]));
// console.log(NestedIterator.next());
var i = new NestedIterator([[1, 1], 2, [1, 1]]),
  a = [];
console.log(i.stack);
console.log(i.next());
while (i.hasNext()) a.push(i.next());
console.log(a);

//  var decodeString = function(s) {
//         let stack = []
//         let answer= []
//         let repeat
//         for(i=0;i<s.length;i++){
//             if(Number.isInteger(s[i]*1)){
//                 repeat = s[i]*1
//             }
//             else if (s[i]!='['&& s[i]!= ']') {
//                 stack.push([s[i]])

//             }
//             else if(s[i]===']'&&stack.length){
//                 if(stack.length>1){
//                  stack =[stack.join('')]
//                  let top = stack.pop()
//                  answer.push(top.repeat(repeat))

//                 }else {
//                     let top = stack.pop()
//                     answer.push(top.repeat(repeat))

//                 }

//             }

//         }
//         return answer.join('')
// };

const decodeString = (s) => {
  const stack = [];

  // using a stack, build segments from inside out
  for (const cv of s) {
    // case 1: cv !== ']', push current value into stack
    if (cv !== "]") {
      stack.push(cv);
      continue;
    }
    console.log(stack);
    let substring = "";
    let n = "";

    // build substring
    // 1. pop off from stack and create substring until ']'
    // 2. '[': marks the start of a substring
    while (stack[stack.length - 1] !== "[") {
      console.log(stack[stack.length - 1]);
      substring = stack.pop() + substring;
    }
    console.log(stack);

    // case 2: value === ']', decode and add to stack
    stack.pop();

    // build number
    // 1. pop off from stack and concat until element is NOT a number
    // 2. non-number: marks the start of the segment
    while (!isNaN(stack[stack.length - 1])) {
      n = stack.pop() + n;
    }

    // build segment
    // 1. concat substring n number of times
    // 2. decoded: push segment into the stack to keep segments in order
    console.log(stack);

    const segment = substring.repeat(Number(n));

    stack.push(segment);
  }

  // join together each segment in stack
  return stack.join("");
};

console.log(decodeString("3[a2[c]]"));

function decodeString1(str) {
  let stack = [];

  for (i = 0; i < str.length; i++) {
    if (str[i] != "]") {
      stack.push(str[i]);
      continue;
    }
    console.log(stack);
    let substr = "";
    let num = "";
    while (stack[stack.length - 1] != "[") {
      substr = stack.pop() + substr;
      console.log(substr);
    }
    stack.pop();
    console.log(stack);

    console.log(num);
    console.log(stack);
    while (!isNaN(stack[stack.length - 1])) {
      num = stack.pop() + num;
    }
    let rep = substr.repeat(num);
    console.log(rep);
    console.log(rep);
    stack.push(rep);
  }
  return stack.join("");
}

console.log(decodeString1("3[a2[c]]"));
