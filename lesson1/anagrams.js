function anagram(word, list) {
  let sortedWord = word.split('').sort();

  let anagrams = list.filter(possibleAnagram => {
    let sortedAnagram = possibleAnagram.split('').sort();

    return sortedAnagram.every((char, i) => char === sortedWord[i]);
  });
  console.log(anagrams);
  return anagrams;
}

anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]