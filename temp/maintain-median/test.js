var func = require("./");
var expect = require("expect.js")

describe("func", function () {

  it("should return each step of median", function() {
    expect(func([32, 43, 12, 43, 65, 67, 23, 76, 23, 42, 25]))
      .to.eql([ 32, 37.5, 32, 37.5, 43, 43, 43, 43, 43, 42.5, 42 ]);
  });
});
