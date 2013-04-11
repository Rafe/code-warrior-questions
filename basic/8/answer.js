var merge = exports.merge = function (array1, array2) {
  var merged = [];
  var a = 0, b = 0;
  while (a < array1.length && b < array2.length) {
    if ((array1[a] < array2[b])) {
      merged.push(array1[a]);
      a++;
    } else {
      merged.push(array2[b]);
      b++;
    };
  }

  while (a < array1.length) {
    merged.push(array1[a]);
    a++;
  }

  while (b < array2.length) {
    merged.push(array2[b]);
    b++;
  }

  return merged;
}

var sort = exports.sort = function(array) {
  if (array.length <= 1) return array;
  var mid = Math.floor(array.length / 2);
  return merge(sort(array.slice(0, mid)), sort(array.slice(mid, array.length)));
}
