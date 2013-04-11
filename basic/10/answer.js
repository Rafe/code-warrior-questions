
module.exports = function (book, word) {
  var words = {}
  word = word.toLowerCase();
  words = book.replace(/[^\w]/gi, ' ').toLowerCase().split(' ');
  words.forEach(function(word) {
    if (words[word]) {
      words[word] += 1;
    } else {
      words[word] = 1;
    };
  });

  return words[word] ? words[word] : 0;
}
