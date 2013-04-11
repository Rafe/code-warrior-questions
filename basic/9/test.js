var minDepth = require("./").minDepth;
var maxDepth = require("./").maxDepth;

var expect = require("expect.js");

describe("tree depth", function () {

  var tree, tree2;

  beforeEach(function() {
    tree = generateTree([1, 2, 3, 4, 5, 0, 6, 7, 8, 9, 0, 0, 10, 0, 11, 12]);
    //           1
    //       2,       3
    //     4   5          6
    //    7 8 9            10
    //  11 12


    tree2 = generateTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    //                 1
    //           2             3
    //       4      5      6     7
    //         8   9     10 11  12 13
  })

  describe("min depth", function() {
    it("should return min depth for tree1", function() {
      expect(minDepth(tree)).to.equal(2);
    });

    it("should return min depth for tree2", function() {
      expect(minDepth(tree2)).to.equal(3);
    });
  });

  describe("max depth", function() {
    it("should return min depth for tree1", function() {
      expect(maxDepth(tree)).to.equal(5);
    });

    it("should return min depth for tree2", function() {
      expect(maxDepth(tree2)).to.equal(4);
    });

  });
});

var Node = function(data) {
  this.left = null;
  this.right = null;
  this.data = data;
}

var generateTree = function(array) {
  var head = new Node(array.shift());
  var queue = [ head ];
  while (queue.length) {
    var node = queue.shift();
    ['left', 'right'].forEach(function(subnode) {
      if (array.length) {
        var val = array.shift();
        if (val == 0) return;
        node[subnode] = new Node(val);
        queue.push(node[subnode]);
      };
    });
  };
  return head;
}
