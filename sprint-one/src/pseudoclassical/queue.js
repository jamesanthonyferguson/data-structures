var Queue = function() {
  this.first = 0;
  this.last = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.last] = value;
  this.last++;
}

Queue.prototype.dequeue = function() {
  if (this.last > this.first) {
    var temp = this.storage[this.first];
    this.storage[this.first] = undefined;
    this.first++;
    return temp;
  }
}
Queue.prototype.size = function() {
  return this.last - this.first;
}



