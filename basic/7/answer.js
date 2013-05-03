var insert = exports.insert = function (array, index, value) {
  var i = index - 1;
  while (i >= 0 && array[i] > value) {
    array[i + 1] = array[i];
    i--;
  }
  array[i + 1] = value;

  return array;
}

exports.sort = function (array) {
  for (var i = 0; i < array.length; i++) {
    insert(array, i, array[i]);
  };
  return array;
}
