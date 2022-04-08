function totalArea (array) {
  let totalArea = array.reduce((accum, subArray) => {
    return accum += subArray[0] * subArray[1];
  }, 0);

  console.log(totalArea);
  return totalArea;
}

function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);

  return totalArea(squares);
}
let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalArea(rectangles);    // 141
console.log(totalSquareArea(rectangles));    // 121
