function myReduce(array, func, initial) {
  let workingArray = array;
  let value = initial;
  if(value === undefined) {
    value = array[0];
    workingArray = array.slice(1,)
  }

  workingArray.forEach(element => {
    initial = func(initial, element);
  })

  return initial;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49