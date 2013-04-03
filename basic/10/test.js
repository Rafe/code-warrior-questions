var func = require("./");
var expect = require("expect.js")

describe("func", function () {
  var book = "State Senator Malcolm A. Smith, who rose to become the first black president of the State Senate, " +
         "and City Councilman Daniel J. Halloran III were arrested early Tuesday on charges of trying to illicitly " +
         "get Mr. Smith on the ballot for this year's mayoral race in New York City, according to federal prosecutors. " +
         "Mr. Smith, a Queens Democrat, and Mr. Halloran, a Queens Republican, were among a half-dozen people arrested by Federal Bureau of Investigation agents in the corruption case. " +
         "The others were Joseph J. Savino, the Bronx G.O.P. chairman; Vincent Tabone, vice chairman of the Queens Republican Party; " +
         "and Noramie F. Jasmin, the mayor of the Rockland County village of Spring Valley, and her deputy, Joseph A. Desmaret, according to a criminal complaint. " +
         "Mr. Smith, 56, was taken from his home in handcuffs by F.B.I. agents before sunrise and Mr. Halloran, " +
         "a lawyer, was arrested about the same time, law enforcement authorities said."

  it("should find frequency of word appeared", function() {
    expect(func(book, 'state')).to.equal(2);
    expect(func(book, 'the')).to.equal(10);
    expect(func(book, 'was')).to.equal(2);
    expect(func(book, 'were')).to.equal(3);
  });
});
