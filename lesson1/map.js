function myMap(array, func) {
  let transformed = [];
  array.forEach(element => {
    transformed.push(func(element));
  });

  return transformed;
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));     // [ 2, 3, 4, 5 ]