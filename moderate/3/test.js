var func = require('./');

var expect = require('expect.js');

describe("func", function() {
  it("can compute trailing zeros in n factorial", function() {
    expect(func(3)).to.equal(0);
    expect(func(6)).to.equal(1);
    expect(func(12)).to.equal(2);
    expect(func(17)).to.equal(3);
    expect(func(20)).to.equal(4);
  });

  it("can compute large factorail", function() {
    expect(func(100)).to.equal(24);
  });
});
