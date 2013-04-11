var func = require("./");
var expect = require("expect.js")

describe("func", function () {
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  it("should generate integer set with size n", function() {
    expect(func(array, 5).length).to.equal(5);
  });
});
