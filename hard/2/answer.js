module.exports = function (words, start, stop) {
  var dict = {}
  words.forEach(function(word) {
    dict[word] = true;
  });

  var actions = [];
  var visited = {};
  var backtrack = {};

  actions.push(start);
  visited[start] = true;

  while (actions.length) {
    var word = actions.shift();

    var words = getWords(dict, word);
    for (var i = 0; i < words.length; i++) {
      var v = words[i]
      if (v == stop) {
        var list = [];
        list.push(v);
        while (word !== undefined) {
          list.unshift(word);
          word = backtrack[word];
        }
        return list;
      };

      if (!visited[v]) {
        actions.push(v);
        visited[v] = true;
        backtrack[v] = word;
      };
    };
  }
  return null;
}

var chars = 'abcdefghijklmnopqrstuvwxyz'.split('')

var getWords = function(dict, word) {
  var words = [];
  for (var i = 0; i < word.length; i++) {
    for (var j = 0; j < chars.length; j++) {
      var w = word.substr(0, i) + chars[j] + word.substr(i + 1, word.length);
      if (dict[w]) words.push(w);
    };
  };
  return words;
}
