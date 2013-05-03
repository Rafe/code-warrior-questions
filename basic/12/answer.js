module.exports = function(array, value) {
  array = array.sort(function(a,b){return a-b});
  var left = 0, right = array.length - 1;
  var result = [];
  while(left < right) {
    var sum = array[left] + array[right];
    if (sum == value) {
      result.push([array[left], array[right]]);
      left++;
      right--;
    } else {
      if (sum > value) {
        right--;
      } else {
        left++;
      };
    };
  }
  return result;
}
