describe('bloomFilter', function() {

  var bloomFilter;

  beforeEach(function() {
    bloomFilter = new BloomFilter(4,100);
  });

  it('should have the theoretical false positive rate', function() {
    var createRandomWord = function(length) {
      var word = '';
      for (var x = 0; x < length; x++) {
        word += String.fromCharCode(Math.floor(Math.random()*26) + 97);
      }
      return word;
    }
    var n = 6;
    var wordLength = 8;
    var insertedWords = [];
    var total = 100000;
    var falsePositives = 0;
    //insert words
    for (var i = 0; i < n; i++) {
      var word = createRandomWord(wordLength);
      insertedWords.push(word);
      bloomFilter.insert(word);
    }
    //check random words
    var truePositives = 0;
    for (var i = 0; i < total; i++) {
      var word = createRandomWord(wordLength);
      if (bloomFilter.contains(word)) {
        if (_.contains(insertedWords, word) === false) {
          falsePositives++;
        } else {
          truePositives++;
        }
      }
    }
    total -= truePositives;

    var falsePositiveRate = falsePositives / total;
    var theoreticalRate = Math.pow( (1 - Math.pow((1 - 1/bloomFilter.m), (bloomFilter.k * n))), bloomFilter.k);
    console.log("Welcome to the bloom Filter!")
    console.log("Total false positives: " + falsePositives);
    console.log("False positive Rate: " + falsePositiveRate);
    console.log("Theoretical false positive rate: " +  theoreticalRate);
    console.log("We are off by: " + Math.abs(Math.floor((falsePositiveRate/theoreticalRate - 1)*100)) + "%")

    expect((theoreticalRate > falsePositiveRate*0.9)&&(theoreticalRate < falsePositiveRate*1.1)).to.equal(true);
  });

});
