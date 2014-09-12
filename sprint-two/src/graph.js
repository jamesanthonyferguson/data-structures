var Graph = function(){
  this._storage = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  var toNodes = Array.prototype.slice.call(arguments,1);
  if (this._storage[newNode] === undefined) {
    this._storage[newNode] = [];
  }
  if (toNode !== undefined) {
    for (var i = 0; i < toNodes.length; i++) {
      this.addEdge(newNode, toNodes[i]);
    }
  }
  if(Object.keys(this._storage).length === 2 && toNode === undefined) {
    var nodes = Object.keys(this._storage);
    this.addEdge(nodes[0], nodes[1]);
  }

};

Graph.prototype.contains = function(node){
  return (this._storage[node] !== undefined)
};

Graph.prototype.removeNode = function(node){
  for (var i = 0; i < this._storage[node].length; i++) {
    this.removeEdge(node,this._storage[node][i])
  }
  this._storage[node] = undefined;
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return _.contains(this._storage[fromNode], toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this._storage[fromNode].push(toNode);
  this._storage[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  this._storage[fromNode] = _.filter(this._storage[fromNode], function(x) {
   return x !== toNode;
  });
  this._storage[toNode] = _.filter(this._storage[toNode], function(x) {
    return x !== fromNode;
  });
  if (this._storage[fromNode].length === 0) {
    this.removeNode(fromNode);
  }
  if (this._storage[toNode].length === 0) {
    this.removeNode(toNode);
  }
};

Graph.prototype.forEachNode = function(iterator) {
  //traverses node
  //performs iterator on each item
  for (var key in this._storage) {
    iterator(key);
  }

}


/*
 * Complexity: What is the time complexity of the above functions?
 * AddNode: Max = O(n) if multiple edges. removeNode: Max = O(n).
 * getEdge: addEdge: O(1). removeEdge: O(n). forEachNode: O(n)
 */
