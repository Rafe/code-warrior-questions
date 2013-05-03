var minDepth = exports.minDepth = function (node) {
  if (node == null) return 0;
  return 1 + Math.min(minDepth(node.left), minDepth(node.right);
}

var maxDepth = exports.maxDepth = function (node) {
  if (node == null) return 0;
  return 1 + Math.max(maxDepth(node.left), maxDepth(node.right);
}

var printTree = exports.printTree = function(head) {
  var queue = [ head ];
  var currentLevel = 1;
  var nextLevel = 0;

  while (queue.length) {
    var node = queue.shift();
    if (!node) return;

    process.stdout.write(node.data.toString() + ' ');
    currentLevel--;

    if (node.left) {
      queue.push(node.left);
      nextLevel++;
    };

    if (node.right) {
      queue.push(node.right);
      nextLevel++;
    };

    if (!currentLevel) {
      process.stdout.write('\n');
      currentLevel = nextLevel;
      nextLevel = 0;
    };
  }
}
