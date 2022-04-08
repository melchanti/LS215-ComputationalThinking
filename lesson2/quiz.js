function foo(list) {
  return list.map(function (word) {
      return word.match(/[aeiou]/ig) || [];
    }).reduce(function (acc, letterList) {
      return acc + letterList.length;
    }, 0);
}

console.log(foo(['a', 'e', 'i', 'o', 'u']		));