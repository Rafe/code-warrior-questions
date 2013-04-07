var func = require("./");
var expect = require("expect.js")

describe("func", function () {
  var array;

  beforeEach(function() {
    array = [3, 4, 2, 1, 5, 6, 9, 8, 7];
  })

  xit("can sort array", function() {
    expect(func.quicksort(array)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  describe("partition", function() {
    it("can partition among pivot", function() {
      expect(func.partition(array, 0, array.length - 1, false))
        .to.eql([1, 2, 3, 4, 5, 6, 9, 8, 7]);
    });
  });
});
