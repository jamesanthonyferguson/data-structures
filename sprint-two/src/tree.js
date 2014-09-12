var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  newTree.parent = null;
  _.extend(newTree,treeMethods)
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var childTree = makeTree(value);
  childTree.parent = this;
  if (this.children !== undefined) {
    this.children.push(childTree);
  } else {
    this.children = [childTree];
  }

};

treeMethods.removeFromParent = function(tree){
  tree.parent.children = undefined;
  tree.parent = null;
  return tree;
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

treeMethods.traverse = function(iterator) {
  this.value = iterator(this.value);
  if (this.children){
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].traverse(iterator);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addChild = O(1)
 * removeFromParent = O(1)
 * contains = O(n)
 * traverse = O(n)
 */
