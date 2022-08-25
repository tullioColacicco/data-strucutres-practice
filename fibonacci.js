// function fibonacci(n) {
//     const result = [0,1]
//     for(i=2;i<= n; i++){
//         const a = result[i -1]
//         const b = result [i-2]
//         result.push(a + b)
//     }
// console.log(result)

// return result[n]
// }

function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    console.log(result);
    cache[args] = result;
    console.log(cache[args]);

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fib = memoize(slowFib);

console.log(fib(5));

console.log(fibonacci(5));
