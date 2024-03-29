describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property("head");
    expect(linkedList).to.have.property("tail");
  });

  it('should have methods named "addToTail", "removeHead", "contains", "addToHead", and "removeTail"', function() {
    expect(linkedList.addToTail).to.be.a("function");
    expect(linkedList.removeHead).to.be.a("function");
    expect(linkedList.contains).to.be.a("function");
    expect(linkedList.addToHead).to.be.a("function");
    expect(linkedList.removeTail).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it("should contain a value that was added", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  // Tests for doubly-linked list

  it('should designate a new head when new nodes are added with "addToHead"', function() {
    linkedList.addToTail(2);
    expect(linkedList.head.value).to.equal(2);
    linkedList.addToHead(4);
    expect(linkedList.head.value).to.equal(4);
    linkedList.addToHead(8);
    expect(linkedList.head.value).to.equal(8);
  });

  it('should remove the last node from the list when removeTail is called', function() {
    linkedList.addToTail(4);
    linkedList.addToHead(8);
    linkedList.removeTail();
    expect(linkedList.tail.value).to.equal(8);
    expect(linkedList.head.value).to.equal(8);
  });

  it('should return the value of the former tail when removeTail is called',function(){
    linkedList.addToTail(4);
    expect(linkedList.removeTail()).to.equal(4);
  });

  it('should have nodes that have "value", "next" and "previous" properties', function() {
    linkedList.addToTail(256);
    expect(linkedList.tail.next !== undefined);
    expect(linkedList.tail.previous !== undefined);
    // Can't check if the 'value' property exists because we can't access a prototype, or can we?
    // NOTE: it is valid for 'value' to be undefined. We can put anything in our linked list
  });

  it('should not be able to remove the head or the tail of a list with nothing in it', function() {
    //Don't know how to write this. Check that it doesn't crash?
    // Maybe it should check that the list throws an exception?
  });


});
