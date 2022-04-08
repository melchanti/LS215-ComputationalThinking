const readline = require('readline-sync');

function one() {
  let firstName = 'Mohamad';
  let lastName = 'EL-Chanti';
  let fullName = firstName + ' ' + lastName;
  console.log(fullName);
}

function two() {
  let firstName = 'Mohamad';
  let lastName = 'EL-Chanti';
  let fullName = firstName.concat(lastName);
  console.log(fullName);
}

function three() {
  let firstName = 'Mohamad';
  let lastName = 'EL-Chanti';
  let fullName = firstName + ' ' + lastName;
  let fullNameArray = fullName.split(' ');
  console.log(fullNameArray);
}

function four() {
  let language = 'JavaScript';
  let idx = language.indexOf('S');
  let charCode = language.charCodeAt(idx);
  console.log(idx);
  console.log(charCode);
  console.log(String.fromCharCode(charCode));
  console.log(language.lastIndexOf('a'));
  let aIndex = language.indexOf('a');
  let vIndex = language.indexOf('v');
  console.log(language.substr(aIndex, 4));
  console.log(language.substr(vIndex, 4));
  console.log(language.substring(aIndex, 4));
  console.log(language.substring(vIndex, 4));
}

function eight() {
  let a = 'a';
  let b = 'b';
  console.log (a > b);
  b = 'B';
  console.log (a > b);
}

function eleven() {
  let fact1 = 'JavaScript is fun';
  let fact2 = 'Kids like it too';
  let compoundSentence = fact1 + ' and ' + fact2.toLowerCase();
  console.log(compoundSentence);
  console.log(`${fact1[0]} ${fact2[0]}`);
}

function thirteen() {
  let pi = 22/7;
  console.log(pi.toString().lastIndexOf('14'));
}

function fourteen() {
  let boxNumber = (356).toString();
  console.log(boxNumber);
  boxNumber = parseInt(boxNumber);
  console.log(typeof(boxNumber));
  boxNumber = String(boxNumber);
  console.log(typeof(boxNumber));
}

function sixteen() {
  let name = readline.question('What is your name? ');
  if (name.endsWith('!')) {
    console.log(`HELLO ${name.slice(0,-1).toUpperCase()}. WHY ARE WE SCREAMING?`);
  } else {
    console.log(`Hello ${name}.`);
  }
}
one();
two();
three();
four();
eight();
eleven();
thirteen();
fourteen();
sixteen();