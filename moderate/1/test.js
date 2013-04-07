var func = require("./");
var expect = require("expect.js")

describe("func", function () {
  it("add numbers", function() {
    expect(func(1,1)).to.equal(2);
    expect(func(5,5)).to.equal(10);
    expect(func(21,26)).to.equal(47);
    expect(func(123,456)).to.equal(579);
    expect(func(1000,2222)).to.equal(3222);
    expect(func(40123,30124)).to.equal(70247);
  });

  it("should not include +", function() {
    expect(func.toString()).to.not.contain('+');
  });
});
