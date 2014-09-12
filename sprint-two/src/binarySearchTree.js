var makeBinarySearchTree = function(value){
  var tree = Object.create(makeBinarySearchTree.prototype)
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};


makeBinarySearchTree.prototype.insert = function(n) {
  if (n < this.value) {

    if (this.left === null) {
      this.left = makeBinarySearchTree(n);
    } else {
      this.left.insert(n);
    }

  } else if (n > this.value) {

    if (this.right === null) {
      this.right = makeBinarySearchTree(n);
    } else {
      this.right.insert(n);
    }

  }
}
makeBinarySearchTree.prototype.contains = function(n) {
  if (this.value === n) {
    return true;
  } else if (n < this.value && this.left !== null) {
    return this.left.contains(n);
  } else if (n > this.value && this.right !== null) {
    return this.right.contains(n);
  }
  return false

}
makeBinarySearchTree.prototype.depthFirstLog = function(c) {
  //call back tree
  // depthfirstlog left (c)
  //'' right (c)
  c(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(c);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(c);
  }

}

makeBinarySearchTree.prototype.breadthFirstLog = function(c) {
  //
}

/*
 * Complexity: What is the time complexity of the above functions?
 * insert, contains, and depthFirstLog have worst case complexity of O(n)
 * and average complexity of O(Log2(n))
 *
 */
