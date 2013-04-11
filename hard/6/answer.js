module.exports = function (text, words) {
  var tree = buildSuffixTree(text);
  var result = []
  words.forEach(function(word) {
    var head = tree;
    for (var i = 0; i < word.length; i++) {
      var char = word[i]
      if (head[char] === undefined) {
        result.push(false);
        return;
      }
      head = head[char];
    };
    result.push(true);
  });

  return result;
}

var buildSuffixTree = function(text) {
  var tree = {};
  for (var i = 0; i < text.length; i++) {
    var head = tree;
    for (var j = i; j < text.length; j++) {
      var char = text[j];
      if (head[char] === undefined) {
        head[char] = {};
      };
      head = head[char];
    };
  };
  return tree;
}
