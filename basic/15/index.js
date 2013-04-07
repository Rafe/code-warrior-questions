var Stack = module.exports = function () {
  this.stack = [];
  this.pastMin = []

  this.push = function(val) {
    this.stack.push(val);
    if (this.stack.length == 1) {
      this.min = val;
    } else if (val < this.min) {
      this.pastMin.push(this.min);
      this.min = val;
    };
  }
  this.pop = function() {
    if (!this.stack.length) return;

    var val = this.stack.pop();
    if (val <= this.min) {
      this.min = this.pastMin.pop();
    };

    return val;
  }
}

var STACK_LIMIT = 10;
var SetStack = function() {
  this.stacks = [];
  this.current = -1;
  this.push = function(val) {
    if (current === -1) {
      this.stacks.push([val]);
    } else {
      var stack = this.stacks[current];
      if (stack.length > STACK_LIMIT) {
        this.stacks.push([val]);
        this.current++;
      } else {
        stack.push(val);
      };
    };
  };

  this.pop = function(val) {
    if (current === -1) return;
    var stack = this.stacks[current];

    if (stack.length == 0) {
      current--;
      return this.pop()
    } else {
      return stack.pop();
    };
  }
}

var hanoi = function(source, target) {
  var other = getOther();
}

4, 3, 1, 6, 7
9 ,10 , 12, 15

var stacksort = function(stack) {
  var result = [];

  while(stack.length) {
    var val = stack.pop();
    while(result.length && result[result.length - 1] > val) {
      stack.push(result.pop());
    }
    result.push(val);
  }
}

var balanced = function(tree) {
  var left = deep(tree.head.left);
  var right = deep(tree.head.right);
  if (Math.abs(left - right) > 1) return false;
  return true;
}

var deep = function(node, v) {
  if (node.left == null && node.right == null) return v + 1;
  else {
    var left = deep(node.left, v + 1);
    var right = deep(node.right, v + 1);
    return left > right ? left : right;
  }
}

var search = function(graph, start, end) {
  var queue = [];

  queue.push(start);

  while(queue.length) {
    var node = queue.shift();
    if (node != null) {
      for (var i = 0; i < node.adjacents.length; i++) {
        var n = node.adjacents[i];
        if (n.state == undefined) {
          if (n == end) {
            return true;
          } else {
            n.state = 'visiting'
            queue.push(n);
          }
        };
      };
      node.state == 'visited';
    };
  }

  return false;
}

var turn = function(node) {
  var left = node.left;
  var right = node.right;
  var originLeft = node.left;
  var originRight = node.right;

  //left
  if (node.data) {
    node.left = right.left;
    node.right = right.right;
    right.right = node.left
    right.left = node.left
    var right.left
  };
}

[1,2,3,4,5,6,7,8, 9]

     1
    5, 3
   2,8,6,7
    4,9
