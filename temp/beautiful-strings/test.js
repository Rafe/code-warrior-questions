var func = require("./");
var expect = require("expect.js")

describe("func", function () {
  it("should return maximum possible score", function() {
    expect(func('ABbCcc')).to.equal(152);

    expect(func('Good luck in the Facebook Hacker Cup this year!'))
      .to.equal(754);

    expect(func('Ignore punctuation, please :)')).to.equal(491);

    expect(func('Sometimes test cases are hard to make up.'))
      .to.equal(729);

    expect(func('So I just go consult Professor Dalves')).to.equal(646);
  });
});
