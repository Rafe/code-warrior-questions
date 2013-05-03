var func = require("./");
var expect = require("expect.js")

describe("func", function () {
  it("should return optimistic solution", function() {
    var fruits = [
      { name: 'palm', weight: 4, price: 4500 },
      { name: 'apple', weight: 5, price: 5700 },
      { name: 'orange', weight: 2, price: 2250 },
      { name: 'strawberry', weight: 1, price: 1100 },
      { name: 'melon', weight: 6, price: 6700 }
    ]
    expect(func(fruits, 8)).to.equal(9050);
  });
});
