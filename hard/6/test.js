var func = require("./");
var expect = require("expect.js")

describe("func", function () {
  it("should able to result match array", function() {
    var text = 'justinbieber';
    var words = ['justin', 'bieber', 'hi', 'inbie',
      'tinb', 'hate' , 'love'];
    expect(func(text, words)).to
      .eql([true, true, false, true, true, false, false]);
  });
});
