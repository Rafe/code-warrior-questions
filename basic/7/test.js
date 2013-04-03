var func = require("./");
var expect = require("expect.js")

describe("func", function () {
  it("can return pseudo hit", function() {
    expect(func("RYGB", "BGYR")).to.eql([0, 4]);
    expect(func("YYGG", "BGYR")).to.eql([0, 2]);
  });
  it("can return hit", function() {
    expect(func("RYGB", "RYGB")).to.eql([4, 0]);
    expect(func("RYGB", "BYGR")).to.eql([2, 2]);
  })
});
