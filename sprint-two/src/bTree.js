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
  if (val === this.val1 || val === this.val2) {
    break;
  } else if (this.val2 === undefined){
    if (val < this.val1) {
      this.val2 = this.val1
      this.val1 = val
    } else if (val > this.val1) {
      this.val2 = val;
    }
  } else if (val < this.val) {

  }
  //Case 2
  //Case 3 - left, mid, right
};

BTree.prototype.contains = function(val) {};

BTree.prototype.depthFirstLog = function(callback) {};

BTree.prototype.breadthFirstLog = function(callback) {};

//Insert pseudo:
// if the value is found as either of the two values in a node, break
// otherwise, if the current leaf node is not full
  // check which value position it should be in
  // and insert it
// if current leaf node is full
  // find low, middle and high values
  //if parent node exists with one value
    //call insert on parent node passing in middle value
    //if child is LHS of parent
      //remove the high value from the original leaf node
      //make the midlink of parent a tree with high as the passed in val
    //if child is RHS of parent
      //remove the low value from the original leaf node
      //make the midlink of parent a tree with high as the passed in val
  //if parent node exists and is full
    //?? call insert on it, passing in middle??
  // if parent node does not exist:
    //
  // chan
