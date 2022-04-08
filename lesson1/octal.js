function octalToDecimal(numberString) {
  let number = numberString.split('').reverse()
    .map((num, i) => num * (8**i))
    .reduce((accum, num) => accum + num);
  
  console.log(number);

  return number;
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9