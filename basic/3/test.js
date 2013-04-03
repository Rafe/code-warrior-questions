var func = require('./');

var expect = require('expect.js');

describe("swap function", function() {
  it("can swap varible in array", function() {
    var num = [1234, 4321];
    func(num, 0, 1);

    expect(num).to.eql([4321, 1234]);
  });
});
