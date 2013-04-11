var func = require("./");
var expect = require("expect.js")

describe("func", function () {
  it("should generate random number between 1 and 7", function() {
    for (var i = 0; i < 10; i++) {
      expect(func()).to.be.lessThan(7);
      expect(func()).to.be.greaterThan(1);
    };
  });
});
