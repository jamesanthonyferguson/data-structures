describe('bloomFilter', function() {

  var bloomFilter;

  beforeEach(function() {
    bloomFilter = new BloomFilter(18);
  });

  it('be able to hash stuff', function() {
    bloomFilter.hash("something");
  });

});
