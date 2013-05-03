module.exports = function (n) {
  return hanoi(n, 'A', 'B', 'C');
}

var cache = {};

function hanoi(n, current, temp, target) {
  var key = n.toString() + current + target;
  if (cache[key]) return cache[key];
  if (n == 1) {
    cache[key] = [{from : current, to: target }];
    return cache[key];
  };

  return hanoi( n - 1, current, target, temp).concat(
    hanoi(1, current, temp, target),
    hanoi(n - 1, temp, current, target)
  );
}

function hanoi(n, current, temp, target) {
  // body...
}
