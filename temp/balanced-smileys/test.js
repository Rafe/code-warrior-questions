var func = require("./");
var expect = require("expect.js")

describe("func", function () {
  it("should return currect smileys", function() {
    expect(func(':((')).to.not.be.ok()

    expect(func('i am sick today (:()')).to.be.ok()

    expect(func('(:)')).to.be.ok()

    expect(func('hacker cup: started :):)')).to.be.ok()

    expect(func(')(')).to.not.be.ok()
  });
});
