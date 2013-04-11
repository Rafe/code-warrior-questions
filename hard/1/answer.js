var count2 = function(n) {
  if (n == 0) return 0;

  var power = 1;
  while (10 * power < n) power *= 10;
  var first = Math.floor(n / power);
  var remain = n % power;
  var n2s = 0;

  if (first > 2) {
    n2s += power;
  } else if (first == 2) {
    n2s += remain + 1;
  };

  var n2other = first * count2(power - 1) + count2(remain);
  return n2s + n2other;

}

var count2i = function(n) {
  var num = n;
  var power = 1;
  var n2s = 0;
  var position = 0;
  var seendigits = 0;
  while (num > 0) {
    var digit = num % 10;
    var powerm = Math.floor(power / 10);
    //count lower position 2s
    //ex: 100 => 20
    //ex: 10000 => 4000
    n2s += digit * position * powerm;
    if (digit == 2) {
      n2s += seendigits + 1;
    } else if (digit > 2) {
      n2s += power;
    };

    seendigits = seendigits + power * digit;
    position++;
    power *= 10;
    num = Math.floor(num / 10);
  }
  return n2s;
}

// 512 = 5 * f(99) + f(12) + 100

module.exports = count2;

// 0  1  2  3  4  5  6  7  8  9
//10 11 12 13 14 15 16 17 18 19
//20 21 22 23 24 25 26 27 28 29
//30 ...
//...
//
//f(123) = 20 + 4 + 3 = 27
//f(20123) = 2 * f(9999) + f(123) + 123 + 1 = 8000 + 27 + 123 + 1 = 8151
//f(9999) = 10 * f(999) + 1000 = 4000
//f(999) = 10 * f(99) + 100 = 300
//f(99) = 10 * f(9) + 10 = 20
//f(9) = 1 = 1
