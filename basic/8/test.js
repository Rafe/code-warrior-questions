var func = require("./");
var expect = require("expect.js")

describe("func", function () {
  it("can return single words of number", function() {
    expect(func(1)).to.eql("one");
    expect(func(2)).to.eql("two");
    expect(func(3)).to.eql("three");
    expect(func(4)).to.eql("four");
    expect(func(5)).to.eql("five");
    expect(func(6)).to.eql("six");
    expect(func(7)).to.eql("seven");
    expect(func(8)).to.eql("eight");
    expect(func(9)).to.eql("nine");
  });

  it("can return double digits words", function() {
    expect(func(10)).to.eql("ten");
    expect(func(21)).to.eql('twenty one');
    expect(func(12)).to.eql('twelve');
    expect(func(13)).to.eql('thirteen');
    expect(func(17)).to.eql('seventeen');
  });

  it("can return 3 digits words", function() {
    expect(func(123)).to.eql('one hundred twenty three');
    expect(func(430)).to.eql('four hundred thirty');
    expect(func(401)).to.eql('four hundred one');
  });

  it("can return 5 digits words", function() {
    expect(func(12345)).to.eql('twelve thousand three hundred fourty five');
  });

  it("can return 6 digits words", function() {
    expect(func(123456)).to
      .eql('one hundred twenty three thousand'
          + ' four hundred fifty six');
  });
});
