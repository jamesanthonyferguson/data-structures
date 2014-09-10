var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.pop = function(){
    if(size > 0) {
      var temp = storage[size-1];
      storage[size-1] = undefined;
      size--;
      return temp;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
