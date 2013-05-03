var getPrime = require("./");
var expect = require("expect.js")

describe("getPrime", function () {
  it("can return all prime numbers", function() {
    expect(getPrime(12)).to.eql([2, 3, 5, 7, 11]);
    expect(getPrime(33)).to.eql(
      [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]
    );
    expect(getPrime(55)).to.eql(
      [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53]);
  });

  it("can return large prime numbers", function() {
    expect(getPrime(1000).length).to.equal(168);
    expect(getPrime(5000).length).to.equal(669);
    expect(getPrime(10000).length).to.equal(1229);
  });
});
