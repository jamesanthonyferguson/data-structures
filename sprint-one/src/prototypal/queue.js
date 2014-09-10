var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(makeQueue.prototype);
  queue.storage = {};
  queue.first = 0;
  queue.last = 0;
  return queue;
};

var queueMethods = {};


makeQueue.prototype.enqueue = function(value) {
  this.storage[this.last] = value;
  this.last++;
}
makeQueue.prototype.dequeue = function() {
  if (this.last > this.first) {
    var temp = this.storage[this.first];
    this.storage[this.first] = undefined;
    this.first++;
    return temp;
  }

}
makeQueue.prototype.size = function() {
  return this.last-this.first;
}
