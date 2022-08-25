function chunk(array, size) {
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length - 1];
    console.log(last);
    if (!last || last.length === size) {
      chunked.push([element]);
      console.log(chunked);
    } else {
      last.push(element);
    }
  }
  return chunked;
}

function chunkedTwo(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
}

console.log(chunk([1, 2, 3, 4, 5], 2));
