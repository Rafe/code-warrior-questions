//persume this is perfect random
var rand = Math.random;

var swap = function(array, a, b) {
  var temp = array[b];
  array[b] = array[a];
  array[a] = temp;
}

module.exports = function (deck) {
  for (var i = 0; i < deck.length; i++) {
    var r = Math.floor(rand() * (deck.length - i)) + i;
    swap(deck, i, r);
  };
  return deck;
}

// perfect rand:
// 52! arrange, each probability should be equal
