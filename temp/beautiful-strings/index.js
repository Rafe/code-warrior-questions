module.exports = function (str) {
  str = str.toLowerCase().replace(/[^a-z]/gi, '');

  var counts = {}
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    };
  };

  var values = Object.keys(counts).map(function(key) {
    return counts[key];
  }).sort();

  var score = 26 - values.length + 1;
  return values.reduce(function(init, value) {
    return init + (value * score++);
  }, 0);
}
