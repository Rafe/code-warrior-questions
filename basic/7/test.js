var sort = require("./").sort,
    insert = require("./").insert;

var expect = require("expect.js")

describe("insertion sort", function () {
  describe("insert", function() {
    it("should not use Array.splice", function() {
      expect(insert.toString()).to.not.contain('splice');
    });

    it("should insert element from index to array", function() {
      var array = [1, 4, 7, 9, 5];
      insert(array, 4, 5);
      expect(array).to.eql([ 1, 4, 5, 7, 9 ]);
    });

    it("should insert element to correct position", function() {
      var array = [4, 28, 43, 77, 12, 1, 25];
      insert(array, 4, 12);
      insert(array, 5, 1);
      insert(array, 6, 25);
      expect(array).to.eql([ 1, 4, 12, 25, 28, 43, 77 ]);
    });
  });

  describe("sort", function() {
    it("should use insert function", function() {
      expect(sort.toString()).to.contain('insert');
    });

    it("should sort the elements", function() {
      var array = [51, 12, 1, 4, 7, 9, 299, 53, 44];
      expect(sort(array)).to.eql([ 1, 4, 7, 9, 12, 44, 51, 53, 299]);
    });
  });
});
