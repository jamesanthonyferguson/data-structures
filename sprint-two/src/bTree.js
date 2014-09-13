var BTree = function (val, parent) {
  this.val = [];
  this.children = [null,null,null,null,null]
  this.parent = parent;
}

BTree.prototype.insert = function (val) {

};

BTree.prototype.contains = function(val) {};

BTree.prototype.depthFirstLog = function(callback) {};

BTree.prototype.breadthFirstLog = function(callback) {};


//this.children explanation: [illegitimate,legit,legit,legit,illegitimate]

//addTree pseudo:
//traverse down tree until links are undefined, - if val === element of this.val, should not flow;
// if the current leaf node is not full (this.val.length <2)
  // if smaller than first element
    // shift it
  // if greater
    //push it
// if current leaf node is full
  // find position in val.array for val to be inserted
  // insert it
  //if parent node exists with one value and therefore has .children type [null,x,y,null,null]

    //!!!!split the child node!!!!:
    //if child is LHS of parent
      //move x and y in the parent.children to the right so now [null,null,x,y,null]
      //remove the val[2] (pop) from the original leaf node
      //insert the popped val[2] as tree at parent.children[1]
    //if child is RHS of parent
      //remove the val[2] (pop) from the original leaf node
      //insert the popped val[2] as tree at parent.children[3]
      ///////////////////////////////////////YOU ARE UP TO HERE
    //call addTree on parent node passing in middle value
  //if parent node exists and is full
    //split, then push
    //?? call insert on it, passing in middle??
    //
  // if parent node does not exist:
    //make a new tree using the middle value
    //make a new tree with the val2 of the childnode as its argument
    //make a new
    //set childnode to be the left link
  // chan
