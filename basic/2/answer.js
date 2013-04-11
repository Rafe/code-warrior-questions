var cache = {};

var fabonacci = module.exports = function(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (!cache[n]) {
    cache[n] = fabonacci(n - 1) + fabonacci(n - 2);
  }
  return cache[n];
}

var iterationFab = function(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;

  var a = 0, b = 1, val = 0;

  for (var i = 1; i < n; i++) {
    val = a + b;
    a = b;
    b = val;
  };
  return val;
}
