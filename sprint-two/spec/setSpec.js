describe('set', function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should handle numbers, differentiating from strings', function(){
    set.add(5);
    expect(set.contains("5")).to.equal(false);
    set.add("5");
    set.remove(5);
    expect(set.contains("5")).to.equal(true);
    expect(set.contains(5)).to.equal(false);
  });
    it('should handle objects and arrays', function(){
    var a = {a: 1, b: "2"}
    var b = [5,"2"]
    set.add(a);
    expect(set.contains(a)).to.equal(true);
    set.remove(a);
    expect(set.contains(a)).to.equal(false);
    set.add(b);
    expect(set.contains(b)).to.equal(true);
    set.remove(b);
    expect(set.contains(b)).to.equal(false);
  });
});
