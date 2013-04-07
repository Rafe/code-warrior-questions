exports.quicksort = function (array) {
  return partition(array, 0, array.length - 1, true)
}

var partition = exports.partition = function (array, start, end, recursive) {
  if (start >= end) return;
  var left = start;
  var right = end;
  var pivot = array[start];

  while (left < right) {
    while (array[left] < pivot) left++;
    while (array[right] > pivot) right--;
    if (left >= right) break;

    var temp = array[left];
    array[left] = array[right];
    array[right] = temp;
  }

  if (recursive) {
    partition(array, start, left - 1, true);
    partition(array, right + 1, end, true);
  };

  return array;
}
