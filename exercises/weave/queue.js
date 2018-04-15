// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor(){
      this.data = [];
  }
}

Queue.prototype.add = function(n){
  return this.data.unshift(n)
}

Queue.prototype.remove = function(){
  return this.data.pop()
}

Queue.prototype.peek = function(){
  return this.data[this.data.length-1]
}
module.exports = Queue;
