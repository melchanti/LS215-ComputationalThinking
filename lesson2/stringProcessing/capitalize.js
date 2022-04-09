function wordCap(string) {
  let capitalized = string.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1,).toLowerCase();
  }).join(' ');

  console.log(capitalized);
  return capitalized;
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'