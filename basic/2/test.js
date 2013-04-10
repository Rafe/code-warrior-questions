var expect = require('expect.js');

var fab = require('./');

describe("fabonacci", function() {
  it("should handle base case", function() {
    expect(fab(0)).to.equal(0);
    expect(fab(1)).to.equal(1);
    expect(fab(2)).to.equal(1);
  });

  it("should return correct sequence", function() {
    expect(fab(6)).to.equal(8);
    expect(fab(7)).to.equal(13);
    expect(fab(8)).to.equal(21);
    expect(fab(9)).to.equal(34);
    expect(fab(10)).to.equal(55);
  });

  it("should return correct number", function() {
    expect(fab(14)).to.equal(377);
    expect(fab(20)).to.equal(6765);
    expect(fab(36)).to.equal(14930352);
    expect(fab(44)).to.equal(701408733);
  });

  it("should fast enough to run big number", function() {
    expect(fab(1000)).to.eql(4.346655768693743e+208);
  });
});
