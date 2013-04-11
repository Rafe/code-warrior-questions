var func = require("./");
var expect = require("expect.js")

describe("func", function () {
  var nums = [4, 2, 5, 0, 8, 11, 234, 1, 23, 43, 122, 30, 12, 123, 435, 13, 121]

  it("can find n-th largest number", function() {
    expect(func(nums, 1)).to.equal(435);
    expect(func(nums, 2)).to.equal(234);
    expect(func(nums, 8)).to.equal(23);
    expect(func(nums, 12)).to.equal(8);
    expect(func(nums, 16)).to.equal(1);
    expect(func(nums, 17)).to.equal(0);
  });
});
