var removeDupe = require("./");
var expect = require("expect.js");

describe("remove dupe", function () {
  var list;

  it("should remove duplicated elements in linked list", function() {
    list = generateList([1, 2, 3, 4, 5, 4, 3, 2, 1]);
    removeDupe(list);
    expect(getValues(list)).to.eql([1, 2, 3, 4, 5]);
  });

  it("should remove more duplicated elements in linked list", function() {
    list = generateList([1, 2, 2, 3, 3, 1, 4, 4, 5, 5]);
    removeDupe(list);
    expect(getValues(list)).to.eql([1, 2, 3, 4, 5]);
  });

  it("should remove more duplicated elements in linked list", function() {
    list = generateList([1, 2, 2, 3, 3, 1, 4, 4, 5, 5]);
    removeDupe(list);
    expect(getValues(list)).to.eql([1, 2, 3, 4, 5]);
  });
});

var Node = function(data) {
  this.data = data;
  this.next = null;
}

var generateList = function(array) {
  if (!array.length) return;

  var head = new Node(array.shift());
  var node = head;

  while(array.length) {
    var val = array.shift();
    if (val) {
      node.next = new Node(val);
      node = node.next;
    };
  };

  return head;
}

var getValues = function(node) {
  var result = [];

  while(node) {
    result.push(node.data);
    node = node.next
  }

  return result;
}
