var makeSet = function(){
  var set = Object.create(makeSet.prototype);
  set._storage = {};
  return set;
};

makeSet.prototype = {};



makeSet.prototype.add = function(item){
  this._storage[JSON.stringify(item)] = typeof item;
};

makeSet.prototype.contains = function(item){
  var targetType = this._storage[JSON.stringify(item)];
  return (targetType !== undefined) && (typeof item === targetType);

};

makeSet.prototype.remove = function(item){
  this._storage[JSON.stringify(item)] = undefined;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
