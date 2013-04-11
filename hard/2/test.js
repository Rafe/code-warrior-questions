var func = require("./");
var expect = require("expect.js")

describe("func", function () {
  var dict = [
      'like',
      'damp',
      'lamp',
      'limp',
      'lime',
      'love',
      'lust',
      'lime',
      'look',
      'lark',
      'lord',
      'last',
      'past',
      'dump'
  ];

  it("should able to shift word", function() {
    expect(func(dict, 'damp', 'like')).to
      .eql(['damp', 'lamp', 'limp', 'lime', 'like']);
  });
});
