var func = require("./");
var expect = require("expect.js")

describe("func", function () {
  it("should return largest sum in sequence", function() {
    expect(func([2, -8, 3, -2, 4, -10])).to.equal(5);
  });
});
