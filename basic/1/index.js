var binarysearch = function(array, value) {

}

module.exports = binarysearch;

var Node = function(d) {
  this.data = d;
  this.next = null;

  this.appendToTail = function(d) {
    var n = this;
    while(n.next != null) n = n.next;
    n.next = new Node(d);
  }

  this.deleteNode = function(head, d) {
    var n = head;
    while (n.next) {
      if (n.next.data == d) {
        n.next = n.next.next;
        return head;
      } else {
        n = n.next;
      };
    }
  }
}

var dupe = {}
while (n.next) {
  if (dupe[n.next.data]) {
    n.next = n.next.next;
  } else {
    dupe[n.next.data] = true;
  };
  n = n.next;
}

while (n.next) {
  var m = n;
  while (m.next) {
    if (n.data == m.next.data) {
      m.next = m.next.next
    };
    m = m.next;
  }
  n = n.next;
}

var findNth = function(result, node, n) {
  if (node.next == null) return 1 ;
  var i = findNth(result, node.next, n) + 1;
  if (i == n) result.push(node.data);
  return i;

}
var nth = function(node, n) {
  if (node.next == null) return 1 ;
  return nth(node.next) + 1;
}
