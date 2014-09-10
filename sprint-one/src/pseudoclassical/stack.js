var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.storage.size = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.storage.size] = value;
  this.storage.size++;
};

Stack.prototype.pop = function() {
  if (this.storage.size > 0) {
    var temp = this.storage[this.storage.size-1];
    this.storage[this.storage.size] = undefined;
    this.storage.size--;
    return temp;
  }
}

Stack.prototype.size = function() {
  return this.storage.size;
}
