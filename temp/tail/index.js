var EventEmitter = require('events').EventEmitter,
    util = require('util'),
    fs = require('fs');

var Tail = module.exports = function(fname, encoding) {
  EventEmitter.call(this);

  this.fname = fname;
  this.encoding = encoding || 'utf-8';

  this.on('read', this.readChunk.bind(this));

  var self = this;

  fs.watchFile(fname, function(cur, prev) {
    if (cur.size > prev.size) {
      self.emit('read', {start: prev.size, end: cur.size});
    };
  })
}

util.inherits(Tail, EventEmitter);

Tail.prototype.readChunk = function(chunk) {
  var self = this,
      buffer = new Buffer(chunk.end - chunk.start),
      offset = 0;

  if (chunk.end > chunk.start) {
    var stream = fs.createReadStream(this.fname, {start: chunk.start, end: chunk.end });

    stream.on('error', )
  };
}
