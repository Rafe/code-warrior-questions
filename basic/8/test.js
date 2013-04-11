var merge = require("./").merge,
    sort = require("./").sort;
var expect = require("expect.js")

describe("merge sort", function () {
  describe("merge", function() {
    it("should merge 2 array", function() {
      var array1 = [1, 3, 5, 7];
      var array2 = [2, 4, 6, 8];
      expect(merge(array1, array2)).to.eql([1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });

  describe("sort", function() {
    it("should call merge function", function() {
      expect(sort.toString()).to.contain('merge');
    });

    it("should sort array", function() {
      var array = [4, 2, 7, 9, 19, 22, 5, 10];
      expect(sort(array)).to.eql([2, 4, 5, 7, 9, 10, 19, 22]);
    });

    it("should sort array", function() {
      var array = [100, 41, 23, 44, 10, 58, 66, 74, 99, 101, 101, 222];
      expect(sort(array)).to.eql(
        [10, 23, 41, 44, 58, 66, 74, 99, 100, 101, 101, 222]
      );
    });
  });
});
