var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === undefined) {
    var bucket = {};
    bucket[k] = v;
    this._storage.set(i, bucket)
  } else {
    var bucket = this._storage.get(i);
    bucket[k] = v;
  }

  this.expand();
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) !== undefined) {
    if (this._storage.get(i)[k] !== undefined) {
      return this._storage.get(i)[k]
    }
  }
  return null

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) !== undefined) {
    delete this._storage.get(i)[k];
    if (Object.keys(this._storage.get(i)).length === 0) {
      this._storage.set(i, undefined);
    }
  }
  this.shrink();
};

HashTable.prototype.expand = function() {
  if(this.percentFull() >= 0.75) {
    var temp = this.toArray();
    this._limit *= 2;
    this._storage = makeLimitedArray(this._limit);
    this.insertFromArray(temp);
  }
};

HashTable.prototype.shrink = function() {
  if(this.percentFull() < 0.25) {
    var temp = this.toArray();
    this._limit /= 2;
    this._storage = makeLimitedArray(this._limit);
    this.insertFromArray(temp);
  }
};

HashTable.prototype.percentFull = function() {
  var bucketsFilled = 0;
  this._storage.each(function(bucket) {
    if(bucket !== undefined) {
      bucketsFilled++;
    }
  });
  return bucketsFilled / this._limit;
};

HashTable.prototype.toArray = function() {
  var arrayedHash = [];
  for (var b = 0; b < this._limit; b++) {
    var bucket = this._storage.get(b);
    for (var k in bucket) {
      arrayedHash.push([k,bucket[k]]);
    }
  }
  return arrayedHash;
}

HashTable.prototype.insertFromArray = function(array) {
  for (var i = 0; i < array.length; i++) {
    this.insert(array[i][0],array[i][1]);
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 * insert, retrieve and remove all have a time complexity of O(1)
 */

 //On insert - check number of free spots - if almost full, invoke doubleSize function
 //On remove - check number of free spots - if almost empty, invoke halveSize function
 //halve size should have a a minimum hash size

 //expand: if percentFull >= 75, then: retrieve each and push to temp array. this._limit *=2.
 //reset this._storage with new limit.
 //loop through temp array and insert items into new storage.

