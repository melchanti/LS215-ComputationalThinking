function reverse(string) {
  let reversed = string.split('').reverse().join('');
  console.log(reversed);
  return reversed;
}

reverse('hello');                  // returns "olleh"
reverse('The quick brown fox');    // returns "xof nworb kciuq ehT"

function acronym(string) {
  let array = string.split(/[- ]/g);
  let acronym = array.reduce((accum, word) => {
    return accum + word[0].toUpperCase();
  }, '');
  console.log(acronym);
  return acronym;
}

acronym('Portable Network Graphics');                  // "PNG"
acronym('First In, First Out');                        // "FIFO"
acronym('PHP: HyperText Preprocessor');                // "PHP"
acronym('Complementary metal-oxide semiconductor');    // "CMOS"
acronym('Hyper-text Markup Language');                 // "HTML"
console.log('\n\n\n\nNEXT');

function isValidEmail(email) {
  if (email.match(/^[a-z0-9]+@([a-z])+(\.([a-z])+)+$/i)) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

isValidEmail('Foo@baz.com.ph');          // returns true
isValidEmail('Foo@mx.baz.com.ph');       // returns true
isValidEmail('foo@baz.com');             // returns true
isValidEmail('foo@baz.ph');              // returns true
isValidEmail('HELLO123@baz');            // returns false
isValidEmail('HELLO123@');
isValidEmail('foo.bar@baz.to');          // returns false
isValidEmail('foo@baz.');                // returns false
isValidEmail('foo_bat@baz');             // returns false
isValidEmail('foo@bar.a12');             // returns false
isValidEmail('foo_bar@baz.com');         // returns false
isValidEmail('foo@bar.....com');         // returns false
console.log('\n\n\n\nNEXT');

function isBalanced(string) {
  let open = 0;
  for (char of string) {
    if (char === '(') {
      open += 1;
    } else if (char === ')') {
      open -= 1;
    }

    if (open < 0) {
      console.log(false);
      return false;
    }
  }

  if (open === 0) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false
console.log('\n\n\n\nNEXT');

let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

function sentiment(text) {
  let positives = text.split(/\W/).filter(word => positiveWords.includes(word));
  let negatives = text.split(/\W/).filter(word => negativeWords.includes(word));
  let sentiment;
  if (positives.length > negatives.length) {
    sentiment = 'Positive';
  } else if (positives.length < negatives.length) {
    sentiment = 'Negative';
  } else {
    sentiment = 'Neutral';
  }
  console.log(`There are ${positives.length} positive words in the text.` +
              `\nPositive sentiments: ${positives.join(', ')}` +
              `\n\nThere are ${negatives.length} negative words in the text.` +
              `\nNegative sentiments: ${negatives.join(', ')}` +
              `\n\nThe sentiment of the text is ${sentiment}.`);
}

let positiveRegex = /\bfortunes?\b|\bdream(s|t|ed)?\b|love(s|d)?\b|respect(s|ed)?\b|\bpatien(ce|t)?\b|\bdevout(ly)?\b|\bnobler?\b|\bresolut(e|ion)?\b/gi;
let negativeRegex = /\bdie(s|d)?\b|\bheartached?\b|death|despise(s|d)?\b|\bscorn(s|ed)?\b|\bweary\b|\btroubles?\b|\boppress(es|ed|or('s)?)?\b/gi;

function sentiment2(text) {
  let positives = text.match(positiveRegex);
  let negatives = text.match(negativeRegex);
  let sentiment;
  if (positives.length > negatives.length) {
    sentiment = 'Positive';
  } else if (positives.length < negatives.length) {
    sentiment = 'Negative';
  } else {
    sentiment = 'Neutral';
  }
  console.log(`There are ${positives.length} positive words in the text.` +
              `\nPositive sentiments: ${positives.join(', ')}` +
              `\n\nThere are ${negatives.length} negative words in the text.` +
              `\nNegative sentiments: ${negatives.join(', ')}` +
              `\n\nThe sentiment of the text is ${sentiment}.`);
}

let textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

  sentiment(textExcerpt);
  sentiment2(textExcerpt);
  console.log('\n\n\n\n\n\n\n\nNEXT');