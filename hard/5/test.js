var func = require("./");
var expect = require("expect.js")

describe("func", function () {
  var words = [
    'test', 'tester', 'testertest',
    'testing', 'testingtester', 'testtesterorange'
  ],
  words2 = [
    'something', 'test', 'thing', 'orange', 'testthingorange',
    'somethingorangetest'
  ];

  it("can find longest word combined from others", function() {
    expect(func(words)).to.eql('testingtester');
    expect(func(words2)).to.eql('somethingorangetest');
  });
});
