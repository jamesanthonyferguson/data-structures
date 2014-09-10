var makeQueue = function(){
  var queue = {};
  queue.storage = {};
  queue.first = 0;
  queue.nextOne = 0;
  _.extend(queue,queueMethods);
  return queue;

};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  this.storage[this.nextOne] = value;
  this.nextOne ++;
}
queueMethods.dequeue = function() {
  if (this.nextOne > this.first){
    var temp = this.storage[this.first];
    this.storage[this.first] = undefined;
    this.first++;
    return temp;
  }
}
queueMethods.size = function(){
  return this.nextOne - this.first;
}



