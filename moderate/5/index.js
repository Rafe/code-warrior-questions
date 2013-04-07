module.exports = function (text, a, b) {
  var dict = build(text);
  var posa = dict[a];
  var posb = dict[b];
  if (!posa || !posb) return -1;
  var distance = 10000000;
  for (var i = 0; i < posa.length; i++) {
    for (var j = 0; j < posb.length; j++) {
      var diff = Math.abs(posa[i] - posb[j]);
      if (diff != 0 && diff < distance) distance = diff;
    };
  };
  return distance;
}

var build = function(text) {
  var words = text.replace(/[.,]/gi, '').toLowerCase().split(' ');
  var dict = {};
  words.forEach(function(word, i) {
    if (dict[word]) {
      dict[word].push(i);
    } else {
      dict[word] = [ i ];
    };
  })
  return dict;
}
