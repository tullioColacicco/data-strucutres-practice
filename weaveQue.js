class Queue {
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.unshift(record);
  }
  remove() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}

const sourceOne = new Queue();
sourceOne.add("hi");
sourceOne.add("there");
const sourceTwo = new Queue();
sourceOne.add("1");
sourceOne.add("2");
console.log(sourceOne);
// function weave (sourceOne, sourceTwo) {
// const q = new Queue();

// while(sourceOne.peek() || sourceTwo.peek()) {
//     if(sourceOne.peek()){
//         q.add(sourceOne.remove())
//     }
//     if(sourceTwo.peek()){
//         q.add(sourceOne.remove())
//     }
// }
// return q
// }

function weave(sourceOne, sourceTwo) {
  const q = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }

    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }

  return q;
}
console.log(weave(sourceOne, sourceTwo));
