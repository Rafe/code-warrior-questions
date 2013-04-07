var func = require("./");
var expect = require("expect.js")

describe("func", function () {
  var list1, list2
  beforeEach(function() {
    list1 = [1, 3, 4, 6, 8, 10, 17, 34];
    list2 = [2, 8, 17, 33, 44, 66, 89, 100, 123];
  });

  it("should return different numbers", function() {
    expect(func(list1, list2)).to
      .eql([1, 2, 3, 4, 6, 10, 33, 34, 44, 66, 89, 100, 123]);
  });
});
