var BTree = function (val, parent) {
  this.val1 = val;
  this.val2 = undefined;
  tree.leftLink = undefined;
  tree.midLink = undefined;
  tree.rightLink = undefined;
  this.parent = parent;
}


BTree.prototype.insert = function (val) {
  //Case 1
  if (this.val2 === undefined){
    if (val < this.val1) {
      this.val2 = this.val1
      this.val1 = val
    } else if (val > this.val1) {
      this.val2 = val;
    }
  } else if (val < this.val1) {
    if (this.leftLink === undefined) {
      this.leftLink = new BTree(val, this);
    } else if (this.leftLink.val1 === undefined || this.leftLink.val1 === undefined) {
      this.left
    }
  }
  //Case 2
  //Case 3 - left, mid, right
};

BTree.prototype.contains = function(val) {};

BTree.prototype.depthFirstLog = function(callback) {};

BTree.prototype.breadthFirstLog = function(callback) {};
