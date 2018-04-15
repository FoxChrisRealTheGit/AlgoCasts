// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

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
