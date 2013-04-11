var func = require("./");
var expect = require("expect.js");

describe("func", function () {
  var matrix = [
    [1, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0],
    [1, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1]
  ];

  it("should find largest subsquare in matrix", function() {
    expect(func(matrix)).to.equal(9);
  });
});

// [0, 1
 // 0, 1] => 1

// [0, 0
 // 1, 1] => 1

// [1, 1, 1
 // 0, 2, 2] => 2

// [0, 1, 1
 // 2, 3, 3]

// [1, 0, 1    [1, 0, 2
 // 1, 1, 1] => 1, 3, 4
