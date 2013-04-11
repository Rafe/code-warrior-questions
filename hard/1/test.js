var func = require("./");
var expect = require("expect.js")

describe("func", function () {
  it("can count how many 2s between 0 and n", function() {
    expect(func(1)).to.equal(0);
    expect(func(2)).to.equal(1);
    expect(func(13)).to.equal(2);
    expect(func(23)).to.equal(7);
    expect(func(100)).to.equal(20);
    expect(func(123)).to.equal(27);
    expect(func(1000)).to.equal(300);
    expect(func(10000)).to.equal(4000);
    expect(func(20000)).to.equal(8001);
    expect(func(20123)).to.equal(8151);
  });

  it("can handle large n", function() {
    expect(func(12314120304213)).to.equal(16158814860684)
  });
});
