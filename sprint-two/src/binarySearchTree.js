var makeBinarySearchTree = function(value, depth){
  var tree = Object.create(makeBinarySearchTree.prototype)
  if (depth === undefined) {
    tree.depth = 0;
  } else {
    tree.depth = depth;
  }
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};


makeBinarySearchTree.prototype.insert = function(n) {
  if (n < this.value) {

    if (this.left === null) {
      this.left = makeBinarySearchTree(n, this.depth+1);
    } else {
      this.left.insert(n);
    }

  } else if (n > this.value) {

    if (this.right === null) {
      this.right = makeBinarySearchTree(n, this.depth+1);
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
  var queue = [];
  queue.push(this)
  while (queue.length>0) {
    if (queue[0].left !== null) {
      queue.push(queue[0].left);
    }
    if (queue[0].right !== null) {
      queue.push(queue[0].right)
    }
    c(queue[0].value)
    queue.shift()
  }
}


////Autoresizing - if maxdepth > 2* min depth - execute breadthfirstlog where
//function puts nodes in array. Some sort of middle out sorting function.
// Then recreate tree.
//May not work - idea 2: traverse tree and count depths at ends, appending to an array. Find max and min.
//, maybe using a callback in depthfirstlog


/*
 * Complexity: What is the time complexity of the above functions?
 * insert, contains, and depthFirstLog have worst case complexity of O(n)
 * and average complexity of O(Log2(n))
 *
 */
