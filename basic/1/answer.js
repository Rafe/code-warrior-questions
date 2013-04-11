module.exports = function(array, value) {
  var result = [],
      left = 0,
      right = array.length - 1;

  while (left <= right) {
    var mid = Math.floor((left + right) / 2);

    result.push(array[mid]);

    if (array[mid] < value) {
      left = mid + 1;
    } else if (array[mid] > value) {
      right = mid - 1;
    } else {
      return result;
    }
  }

  return result;
}
