var bfs = require("./").breadthFirstSearch;
var dfs = require("./").depthFirstSearch;
var expect = require("expect.js");

describe("search", function () {
  var tree;

  beforeEach(function() {
    tree = generateTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    //                1
    //       2                  3
    //   4       5         6         7
    // 8   9  10   11   12   13   14   15
  });

  describe("breadth first", function() {
    it("should search breadth first", function() {
      var tracker = [];
      expect(bfs(tree, 5, tracker)).to.be.ok();
      expect(tracker).to.eql([ 1, 2, 3, 4, 5]);
    });

    it("should search in long path", function() {
      var tracker = [];
      expect(bfs(tree, 11, tracker)).to.be.ok();
      expect(tracker).to.eql([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    });

    it("should return false when no element", function() {
      expect(bfs(tree, 0, [])).to.not.be.ok();
    });
  });

  describe("depth first", function() {
    it("should search depth first", function() {
      var tracker = [];
      expect(dfs(tree, 5, tracker)).to.be.ok();
      expect(tracker).to.eql([ 1, 2, 4, 8, 9, 5]);
    });

    it("should search in long path", function() {
      var tracker = [];
      expect(dfs(tree, 11, tracker)).to.be.ok();
      expect(tracker).to.eql([ 1, 2, 4, 8, 9, 5, 10, 11 ]);
    });

    it("should return false when no element", function() {
      expect(dfs(tree, 0, [])).to.not.be.ok();
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
        node[subnode] = new Node(array.shift());
        queue.push(node[subnode]);
      };
    });
  };
  return head;
}
