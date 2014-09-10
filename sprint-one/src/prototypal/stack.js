var makeStack = function() {
  var stack = Object.create(makeStack.prototype);
  stack.storage = {};
  stack.storage.size = 0;
  return stack;
};

//needs to be removed!
var stackMethods = {};

makeStack.prototype.push = function(value) {
  this.storage[this.storage.size] = value;
  this.storage.size++;
};

makeStack.prototype.pop = function() {
  if(this.storage.size>0) {
    var temp = this.storage[this.storage.size - 1];
    this.storage[this.storage.size-1] = undefined;
    this.storage.size--;
    return temp;
  }
};

makeStack.prototype.size = function() {
  return this.storage.size;
};


