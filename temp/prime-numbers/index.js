module.exports = function (n) {
  if (n <= 2) return [];
  var primes = [];
  for (var i = 0; i <= n; i++) {
    primes[i] = false;
  }
  for (var i = 1; 6 * i + 5 <= n; i++) {
    primes[6 * i + 1] = true;
    primes[6 * i + 5] = true;
  };
  if (6 * i + 1 <= n) primes[6 * i + 1] = true;

  primes[2] = primes[3] = primes[5] = true;

  var filter = function(primes, i) {
    if (primes[i]) {
      for (var j = 2; j * i <= n; j++) {
        primes[j * i ] = false;
      };
    };
  }

  for (var i = 0; (6 * i + 5) * (6 * i + 5) <= n; i++) {
    filter(primes, 6 * i + 1);
    filter(primes, 6 * i + 5);
  };

  if((6 * i + 1) * (6 * i + 1) <= n) {
    filter(primes, 6 * i + 1);
  };

  var result = [];
  primes.map(function(i, index) {
    if (i == true) result.push(index);
  });

  return result;
}
