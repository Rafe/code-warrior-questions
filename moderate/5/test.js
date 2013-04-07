var func = require("./");
var expect = require("expect.js")

var text = "Officials from Farah said the province had become a" +
 "hotbed for the insurgency and drug traffickers, " +
 "as the government focused its resources on more violent" +
 "areas of the country. Humaira Ayobi, a member of the Parliament" +
 "who represents Farah, said that a recent effort by the police to" +
 "stem the drug trade may have contributed to the violence seen on " +
 "Wednesday. Last month, five police officers were killed in the " +
 "province while conducting a poppy eradication campaign."

describe("func", function () {
  it("should return shortest distence between 2 word", function() {
    expect(func(text, 'last', 'campaign')).to.equal(15);
    expect(func(text, 'the', 'the')).to.equal(3)
  });
});
