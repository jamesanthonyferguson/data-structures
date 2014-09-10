var makeStack = function() {
  var stack = {};
  stack.storage = {};
  stack.storage.size = 0;
  _.extend(stack,stackMethods)
  return stack

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};
stackMethods.push = function(value){
  this.storage[this.storage.size] = value;
  this.storage.size ++;
};
stackMethods.pop = function(){
  if(this.storage.size > 0) {
    var temp = this.storage[this.storage.size-1];
    this.storage[this.storage.size-1] = undefined;
    this.storage.size--;
    return temp;
  }
};
stackMethods.size = function(){
  return this.storage.size;
}


