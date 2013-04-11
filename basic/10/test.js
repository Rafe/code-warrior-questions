var func = require("./");
var expect = require("expect.js")

describe("frequency of occurrences", function () {
  var book = "State Senator Malcolm A. Smith, who rose to become the first black president of the State Senate, " +
         "and City Councilman Daniel J. Halloran III were arrested early Tuesday on charges of trying to illicitly " +
         "get Mr. Smith on the ballot for this year's mayoral race in New York City, according to federal prosecutors. " +
         "Mr. Smith, a Queens Democrat, and Mr. Halloran, a Queens Republican, were among a half-dozen people arrested by Federal Bureau of Investigation agents in the corruption case. " +
         "The others were Joseph J. Savino, the Bronx G.O.P. chairman; Vincent Tabone, vice chairman of the Queens Republican Party; " +
         "and Noramie F. Jasmin, the mayor of the Rockland County village of Spring Valley, and her deputy, Joseph A. Desmaret, according to a criminal complaint. " +
         "Mr. Smith, 56, was taken from his home in handcuffs by F.B.I. agents before sunrise and Mr. Halloran, " +
         "a lawyer, was arrested about the same time, law enforcement authorities said."

  it("should count number of words appeared", function() {
    expect(func(book, 'state')).to.equal(2);
    expect(func(book, 'the')).to.equal(10);
    expect(func(book, 'was')).to.equal(2);
    expect(func(book, 'were')).to.equal(3);
  });

  it("should return zero for noun found word ", function() {
    expect(func(book, 'rainbow')).to.equal(0);
    expect(func(book, 'nyan')).to.equal(0);
    expect(func(book, 'cat')).to.equal(0);
  });

  it("should fund upper case words", function() {
    expect(func(book, 'Were')).to.equal(3);
    expect(func(book, 'Smith')).to.equal(4);
    expect(func(book, 'jasmin')).to.equal(1);
  });
});
