var quicksort = require("./").quicksort;
var partition = require("./").partition;

var expect = require("expect.js");

describe("quicksort", function () {
  var array, array2;

  beforeEach(function() {
    array = [3, 4, 2, 1, 5, 6, 9, 8, 7];
    array2 = [43, 12, 56, 10, 13, 47, 3, 5, 17, 25, 35]
  })

  it("can sort array", function() {
    expect(quicksort(array)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(quicksort(array2)).to.eql([ 3, 5, 10, 12, 13, 17, 25, 35, 43, 47, 56 ]);
  });

  describe("partition", function() {
    it("can partition among pivot", function() {
      expect(partition(array, 0, array.length - 1, false))
        .to.eql([1, 2, 3, 4, 5, 6, 9, 8, 7]);
      expect(partition(array2, 0, array2.length - 1, false))
        .to.eql([ 35, 12, 25, 10, 13, 17, 3, 5, 43, 47, 56 ]);
    });
  });
});
