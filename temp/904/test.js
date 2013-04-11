var func = require('./');
var expect = require('expect.js');

describe("tic-tac-toe", function() {
  var tic = [
    [ 'X', 'O', 'X'],
    [ 'X', 'X', 'O'],
    [ 'O', 'O', ''],
  ];

  it("can return win or not", function() {
    expect(func(tic)).to.eql('')
    tic[2][2] = 'O'
    expect(func(tic)).to.eql('O');
    tic[2][2] = 'X'
    expect(func(tic)).to.eql('X');
  });
});
