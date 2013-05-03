module.exports = function (str) {
  var hi = 0,
      low = 0,
      cur = '',
      prev = '';

  for (var i = 0; i < str.length; i++) {
    cur = str[i];
    if (prev == ':') {
      if (cur == '(') {
        hi++;
      } else if (cur == ')'){
        low--;
        low = Math.max(low, 0);
      };
    } else {
      if (cur == '(') {
        hi++;
        low++;
      } else if (cur == ')') {
        hi--;
        low--;
        low = Math.max(low, 0);
      };
    };
    prev = cur;
  };

  return low == 0 && hi >= 0;
}
