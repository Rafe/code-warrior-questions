var func = require('./');

var expect = require('expect.js');

describe("func", function() {
  it("can return max number", function() {
    expect(func(10, 20)).to.equal(20);
    expect(func(20, 10)).to.equal(20);
    expect(func(12341, 123)).to.equal(12341);
    expect(func(413, 0)).to.equal(413);
    expect(func(0, -10)).to.equal(0);
    expect(func(100000000, 100000)).to.equal(100000000);
    expect(func(123123, 321321)).to.equal(321321);
  });
});
