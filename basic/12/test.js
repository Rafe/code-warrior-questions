var func = require("./");
var expect = require("expect.js")

describe("func", function () {
  it("should find all pairs of integer", function() {
    var result = func([1, 2, 3, 4, 5, 6, 7, 8, 9], 10);
    result.forEach(function(pair) {
      expect(pair[0] + pair[1]).to.equal(10);
    });
    expect(result.length).to.equal(4);
  });


  it("should find all pairs of integer", function() {
    var array = [23, 3, 31, 39, 51, 19, 47, 67, 88, 91];
    var result = func(array, 70);
    result.forEach(function(pair) {
      expect(pair[0] + pair[1]).to.equal(70);
    });
    expect(result.length).to.equal(4);
  });
});
