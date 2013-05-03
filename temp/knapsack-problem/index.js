module.exports = function (fruits, total) {
  var optimize = range(total);

  fruits.forEach(function(fruit) {
    for (var i = 0; i <= total; i++) {
      // check optimized weight left, if able for fruit,
      // try to add fruit and check optimize array to update
      if (i >= fruit.weight) {
        var best = optimize[i - fruit.weight];
        best += fruit.price;
        if (optimize[i] <= best) {
          optimize[i] = best;
        };
      };
    };
  });

  return optimize.pop();
}

var range = function(n) {
  var array = [];
  for (var i = 0; i <= n; i++) {
    array[i] = 0;
  };
  return array;
}
