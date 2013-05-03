var preorder = exports.preorder = function (head, tracker) {
  if (head == null) return;
  tracker.push(head.data);
  preorder(head.left, tracker);
  preorder(head.right, tracker);
}

var inorder = exports.inorder = function (head, tracker) {
  if (head == null) return;
  inorder(head.left, tracker);
  tracker.push(head.data);
  inorder(head.right, tracker);
}

var postorder = exports.postorder = function (head, tracker) {
  if (head == null) return;
  postorder(head.left, tracker);
  postorder(head.right, tracker);
  tracker.push(head.data);
}

var iterPreorder = function (head, tracker) {
  var stack = [head];

  while (stack.length) {
    var node = stack.pop();
    tracker.push(node.data);

    if (node.right)
      stack.push(node.right);
    if (node.left)
      stack.push(node.left);
  }
}

var iterInorder = function (head, tracker) {
  var stack = [head];

  while (stack.length) {
    var node = stack.pop();

    if (node.visited) {
      tracker.push(node.data);
      continue;
    } else {
      node.visited = true;
    };

    if (node.right)
      stack.push(node.right);
    stack.push(node);
    if (node.left)
      stack.push(node.left);
  }
}

var iterPostorder = function (head, tracker) {
  var stack = [head];

  while (stack.length) {
    var node = stack.pop();

    if (node.visited) {
      tracker.push(node.data);
      continue;
    } else {
      node.visited = true;
    };

    stack.push(node);
    if (node.right)
      stack.push(node.right);
    if (node.left)
      stack.push(node.left);
  }
}
