module.exports = function (array, n) {
  if (n > array.length) return -1;
  n = array.length - n;

  var sorted = partition(array, 0, array.length - 1, n)
  return sorted[n];
}

var partition = function(array, left, right, n) {
  if (left >= right) return array;

  var first = left;
  var last = right;
  var pivot = array[n];

  while (left < right) {
    while(array[left] < pivot) left++;
    while(array[right] > pivot) right--;
    if (left >= right) break;
    swap(array, left, right);
  }
  var rank = left;

  if (rank == n) return array;
  if (rank < n) {
    return partition(array, rank + 1, last, n);
  };
  if (rank > n) {
    return partition(array, first, rank - 1, n);
  };
}

var swap = function(array, a, b) {
  var temp = array[b];
  array[b] = array[a];
  array[a] = temp;
}
