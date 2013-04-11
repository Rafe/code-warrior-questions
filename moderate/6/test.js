var sum = require("./");
var expect = require("expect.js")

describe("continous sequence sum", function () {
  it("should return largest sum in sequence", function() {
    expect(sum([2, -8, 3, -2, 4, -10])).to.equal(5);
  });

  it("should return largest sum in sequence2", function() {
    expect(sum([12, 5, 10, -10, 6, 4, -10])).to.equal(27);
  });
});
