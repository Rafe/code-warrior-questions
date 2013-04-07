var rand = Math.random;

var swap = function(array, a, b) {
  var temp = array[b];
  array[b] = array[a];
  array[a] = array[b];
}

module.exports = function (array, n) {
  var clone = array.slice(0)
  for (var i = 0; i < n; i++) {
    var r = Math.floor((rand() * n) - i) + i
    swap(clone, i, r);
  };
  return clone.slice(0, n);
}
