module.exports = function (head) {
  var cache = {};
  var node = head;
  cache[node.data] = true;
  while (node) {
    if (node.next) {
      if (cache[node.next.data]) {
        node.next = node.next.next;
      } else {
        cache[node.next.data] = true;
        node = node.next;
      }
    } else {
      node = node.next;
    }
  }
  return head;
}
