var expect = require('expect.js');

var binarysearch = require('./');

describe("binary search", function() {
  var array = [1, 2, 3, 4, 5, 6];
  var array2 = [3, 6, 10, 12, 15, 20, 22, 25, 27, 29, 41, 45, 46, 58];

  it("should return search path", function() {
    expect(binarysearch(array, 3)).to.eql([3]);
    expect(binarysearch(array, 1)).to.eql([3, 1]);
    expect(binarysearch(array, 5)).to.eql([3, 5]);
    expect(binarysearch(array, 6)).to.eql([3, 5, 6]);
  });

  it("should search elements", function() {

    expect(binarysearch(array2, 29).pop()).to.equal(29);
    expect(binarysearch(array2, 15).pop()).to.equal(15);
    expect(binarysearch(array2, 7).pop()).to.not.equal(7);
  });
});
