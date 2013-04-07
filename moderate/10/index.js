module.exports = function(numbers) {
  var max = new MaxHeap();
  var min = new MinHeap();
  var medians = [];
  var median = 0;
  numbers.forEach(function(n) {
    if (min.heap.length == max.heap.length) {
      if (min.peek() !== undefined && n > min.peek()) {
        max.push(min.poll());
        min.push(n);
      } else {
        max.push(n);
      };
    } else {
      if (n < max.peek()) {
        min.push(max.poll());
        max.push(n);
      } else {
        min.push(n);
      };
    };
  });
  return medians;
}

var insertMedian = function (numbers) {
  var collection = [],
      medians = [];

  numbers.forEach(function(number) {
    insert(collection, number);
    var mid = Math.floor(collection.length / 2);
    if (collection.length % 2 == 0) {
      medians.push((collection[mid - 1] + collection[mid]) / 2);
    } else {
      medians.push(collection[mid]);
    };
  });
  return medians;
}

var insert = function(collection, number) {
  var i = 0;
  while (number > collection[i]) { i++}
  collection.splice(i, 0, number);
}

var MaxHeap = function() {
  this.heap = [];
}

MaxHeap.prototype.peek = function() {
  return this.heap[0];
}

MaxHeap.prototype.push = function(n) {
  this.heap.push(n);
  var i = this.heap.length - 1;

  while (true) {
    var parent = Math.floor((i - 1) / 2);

    if (this.heap[parent] < this.heap[i]) {
      swap(this.heap, parent, i);
      i = parent;
      if (parent <= 0) return this;
    } else {
      return this;
    };

  }
}

var MinHeap = function() {
  this.heap = [];
}

MinHeap.prototype.peek = function() {
  return this.heap[0];
}

MinHeap.prototype.push = function(n) {
  this.heap.push(n);
  var i = this.heap.length - 1;

  while (true) {
    var parent = Math.floor(i / 2);

    if (this.heap[parent] > this.heap[i]) {
      swap(this.heap, parent, i);
      i = parent;
      if (parent <= 0) return this;
    } else {
      return this;
    };
  }
}

MinHeap.prototype.poll = function() {
  if (this.heap.length) {
    swap(this.heap, 0, this.heap.length - 1);
    var val = this.heap.pop();
    var s = 0;
  } else {
    return null;
  };
}

var swap = function(array, a, b) {
  var temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}
