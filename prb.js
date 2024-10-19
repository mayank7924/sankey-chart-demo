// [f(x), g(x), h(x)] is fn(x) = f(g(h(x)))

const compose = (functions) => {
  if (functions.length === 0) {
    return function (x) {
      return x;
    };
  }

  return functions.reduceRight((acc, curr) => (x) => {
    return curr(acc)
  });
};
