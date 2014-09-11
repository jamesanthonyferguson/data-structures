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
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) !== undefined) {
    return this._storage.get(i)[k]
  }
  return null

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) !== undefined) {
    this._storage.get(i)[k] = null;
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert, retrieve and remove all have a time complexity of O(1)
 */
