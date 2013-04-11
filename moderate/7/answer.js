module.exports = function (list1, list2) {

  var c1 = 0;
  var c2 = 0;
  var result = [];
  while (c1 < list1.length || c2 < list2.length) {
    if (c1 >= list1.length) {
      result.push(list2[c2]);
      c2++;
    } else if (c2 >= list2.length) {
      result.push(list1[c1]);
      c1++;
    } else if (list1[c1] > list2[c2]) {
      result.push(list2[c2]);
      c2++;
    } else if (list1[c1] < list2[c2]) {
      result.push(list1[c1]);
      c1++;
    } else if (list1[c1] == list2[c2]) {
      c1++;
      c2++;
    };
  }
  return result;
}
