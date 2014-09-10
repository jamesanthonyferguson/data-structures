var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0; // points to the first stored index
  var next = 0; // last index in storage + 1

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[next] = value;
    next++;
  };

  someInstance.dequeue = function(){
    if(next - first > 0) {
      var temp = storage[first];
      storage[first] = undefined;
      first++;
      return temp;
    }
  };

  someInstance.size = function(){
    return next - first;
  };

  return someInstance;
};
