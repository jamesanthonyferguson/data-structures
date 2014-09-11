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
  if(this._storage.length === 2 && toNode === undefined) {
    debugger;
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
  _.filter(this._storage[fromNode], function(x) { return x !== toNode;});
  if (this._storage[fromNode].length === 0) {
    this.removeNode(fromNode);
  }
  if (this._storage[toNode].length === 0) {
    this.removeNode(toNode);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
