var add = module.exports = function(a, b) {
  if (b == 0) {
    return a;
  };
  var sum = (a ^ b);
  var carry = ((a & b) << 1);
  return add(sum, carry);
}
