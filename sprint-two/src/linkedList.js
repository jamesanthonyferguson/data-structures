var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var item = makeNode(value);
    if (list.tail === null) {
      list.head = item;
      list.tail = item;
    } else {
      list.tail.next = item;
      item.prev = list.tail;
      list.tail = item;
    }
  };

  list.addToHead = function(value) {
    var item = makeNode(value);
    if (list.tail === null) {
      list.head = item;
      list.tail = item;
    } else {
      list.head.prev = item;
      item.next = list.head;
      list.head = item;
    }
  };


  list.removeHead = function(){
    if (list.head !== null) {
      var temp = list.head.value;
      if (list.head.next === null) {
        list.head = null;
        list.tail = null;
      } else {
        list.head = list.head.next;
        list.head.prev = null;
      }
      return temp;
    }

  };

  list.removeTail = function() {
    if (list.head !== null) {
      var temp = list.tail.value;
      if (list.tail.prev === null) {
        list.head = null;
        list.tail = null;
      } else {
        list.tail = list.tail.prev;
        list.tail.next = null;
      }
      return temp;
    }
  };

  list.contains = function(target){
    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *    Add and remove to the head or tail = O(1)
 *    Contains has O(n)
 */
