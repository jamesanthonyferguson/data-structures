var BloomFilter = function(k,m) {
  this.k = k;
  this.m = m;
  this.storage = [];
  for (var i = 0; i < this.m; i++) {
    this.storage[i] = 0;
  }
}

BloomFilter.prototype.hash = function(message) {
  var sha1hash = Sha1.hash(message);
  var hashes = [];
  var hashLength = Math.floor(sha1hash.length / this.k);
  for (var i = 0; i < this.k; i++) {
    hashes[i] = sha1hash.substring(i*hashLength,(i+1)*hashLength);
    hashes[i] = parseInt(hashes[i],16) % this.m;
  }
  return hashes;
}

BloomFilter.prototype.insert = function(elmt) {
  var hashes = this.hash(elmt.toString());
  for (var i = 0; i < hashes.length; i++) {
    this.storage[hashes[i]] = 1;
  }
};

BloomFilter.prototype.contains = function(elmt) {
  var hashes = this.hash(elmt.toString());
  for (var i = 0; i < hashes.length; i++) {
    if(this.storage[hashes[i]] === 0) {
      return false;
    }
  }
  return true;
};
