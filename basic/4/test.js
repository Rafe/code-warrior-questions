var preorder = require("./").preorder,
    inorder = require("./").inorder,
    postorder = require("./").postorder;

var expect = require("expect.js");

describe("tree traversal", function () {
  var tree;

  beforeEach(function() {
    tree = generateTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    //                1
    //       2                  3
    //   4       5         6         7
    // 8   9  10   11   12   13   14   15
  });

  describe("inorder", function() {
    it("should show inorder sequence", function() {
      var tracker = [];
      inorder(tree, tracker);
      expect(tracker).to.eql([ 8, 4, 9, 2, 10, 5, 11, 1, 12, 6, 13, 3, 14, 7, 15 ]);
    });
  });

  describe("preorder", function() {
    it("should show preorder sequence", function() {
      var tracker = [];
      preorder(tree, tracker);
      expect(tracker).to.eql([ 1, 2, 4, 8, 9, 5, 10, 11, 3, 6, 12, 13, 7, 14, 15 ]);
    });
  });

  describe("postorder", function() {
    it("should show postorder sequence", function() {
      var tracker = [];
      postorder(tree, tracker);
      expect(tracker).to.eql([ 8, 4, 9, 2, 10, 5, 11, 12, 6, 13, 3, 14, 7, 15, 1 ]);
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
