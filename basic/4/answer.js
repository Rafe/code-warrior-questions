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
