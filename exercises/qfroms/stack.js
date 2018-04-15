class Stack {
  constructor(){
      this.data = []
  }
}

Stack.prototype.push = function(x){
  return this.data.push(x)
}

Stack.prototype.pop = function(){
  return this.data.pop();
}

Stack.prototype.peek = function(){
  return this.data[this.data.length - 1]
}

module.exports = Stack;
