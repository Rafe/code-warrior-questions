var breadthFirstSearch = exports.breadthFirstSearch = function (node, n, tracker) {
  var queue = [ node ];
  while (queue.length) {
    var node = queue.shift();
    if (node == null) continue;

    tracker.push(node.data);

    if (node.data == n) return true;

    queue.push(node.left);
    queue.push(node.right);
  }

  return false;
}

var depthFirstSearch = exports.depthFirstSearch = function (node, n, tracker) {
  if (node == null) return false;

  tracker.push(node.data);

  if (node.data == n) return true;

  return depthFirstSearch(node.left, n, tracker) || depthFirstSearch(node.right, n, tracker);
}
