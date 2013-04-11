module.exports = function (words) {
  var trie = buildTrie(words);
  var longestWord = '';

  words.forEach(function(word) {
    var head = trie;
    if (isCombined(trie, word, true) === true) {
      if (longestWord.length < word.length) longestWord = word;
    };
  });
  return longestWord;
}

var isCombined = function(trie, word, self) {
  var head = trie,
      i = 0;

  while(head !== undefined && i < word.length) {
    if (head === 0) {
      return isCombined(trie, word.slice(i));
    }
    if (head['$'] === 0) {
      if (isCombined(trie, word.slice(i))) return true;
    }
    head = head[word[i++]];
  }

  if (i >= word.length && !self) return true ;

  return false;
}

var buildTrie = function(words) {
  var trie = {}
  words.forEach(function(word) {
    var head = trie;
    for (var i = 0; i < word.length; i++) {
      var char = word[i];
      // 1 not exist
      // 2 have word
      // 3 end
      if (head[char] === undefined) {
        if (i == word.length - 1) {
          head[char] = 0;
        } else {
          head[char] = {};
        };
      } else if (head[char] === 0) {
        if (i != word.length - 1) {
          head[char] = { '$': 0 };
        }
      }
      head = head[char];
    };
  });
  return trie;
}
