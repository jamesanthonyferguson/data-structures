var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  _.extend(newTree,treeMethods)
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var childTree = makeTree(value);
  if (this.children !== undefined) {
    this.children.push(childTree);
  } else {
    this.children = [childTree];
  }

};

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  } else {
    if (this.children) {
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].contains(target)) {
          return true;
        }
      }
    }
    return false;
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 * addChild = O(1)
 * contains = O(N)
 */
