var makeQueue = function(){
  var queue = {};
  queue.storage = {};
  queue.first = 0;
  queue.nextOne = 0;
  _.extend(queue,makeQueue.queueMethods);
  return queue;

};

makeQueue.queueMethods = {};
makeQueue.queueMethods.enqueue = function(value) {
  this.storage[this.nextOne] = value;
  this.nextOne ++;
}
makeQueue.queueMethods.dequeue = function() {
  if (this.nextOne > this.first){
    var temp = this.storage[this.first];
    this.storage[this.first] = undefined;
    this.first++;
    return temp;
  }
}
makeQueue.queueMethods.size = function(){
  return this.nextOne - this.first;
}

