var BloomFilter = function(limit) {
  //this._storage = BloomFilter.makeLimitedArray(limit);
}

BloomFilter.prototype.hash = function(message) {
  console.log(Sha1.hash(message).length);
}


//HelperFunctions
BloomFilter.prototype.makeLimitedArray = function(limit) {};
