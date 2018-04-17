// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    //allows the list to work with a for...of loop
    *[Symbol.iterator](){
        let node = this.head;
        while(node){
            yield node;
            node = node.next;
        }
    }
}

LinkedList.prototype.insertFirst = function (data) {
    return this.head = new Node(data, this.head);
}

LinkedList.prototype.size = function(){
    let count = 0;
    let node = this.head;
    while (node) {
        count++
        node = node.next
    }
    return count
}

LinkedList.prototype.getFirst = function(){
    return this.head
}

LinkedList.prototype.getLast = function(){
    if (!this.head){
        return null
    }
    let node = this.head;
    while(node){
        if(!node.next){
            return node;
        }
        node = node.next
    }
    return prevNode
}

LinkedList.prototype.clear = function(){
    return this.head = null
}

LinkedList.prototype.removeFirst = function(){
    if(!this.head){
        return
    }
    return this.head = this.head.next
}

LinkedList.prototype.removeLast = function(){
    if (!this.head){
        return
    }
    let node = this.head;
    let prevNode= null;
    while(node){
       
        if(!node.next){
            if(!prevNode){
                return this.head = null
            }
            return prevNode.next = null
        } 
        prevNode = node
        node = node.next
    }
}

LinkedList.prototype.insertLast = function(data){
    const last = this.getLast()

    if(last){
        last.next = new Node(data)
    }else{
        this.head = new Node(data)
    }
}

LinkedList.prototype.getAt = function(n){
    let node = this.head;
    let count = 0;
    while(node){
        if(count === n){
            return node;
        }
        count++;
        node = node.next;
    }
    return null;
}

LinkedList.prototype.removeAt = function(n){
    if(!this.head){
        return
    }
    if(n === 0){
        return this.head = this.head.next
    }
    
    const prev = this.getAt(n-1)
    if(!prev || !prev.next){
        return
    }
    prev.next = prev.next.next
}

LinkedList.prototype.insertAt = function(data, n){
    if(!this.head){
        return this.head = new Node(data)
    }
    if(n ===0){    
        return this.head = new Node(data, this.head)
    }
    
    const prev = this.getAt(n-1) || this.getLast()
    const node = new Node(data, prev.next)
    return prev.next = node
}

LinkedList.prototype.forEach = function(cb){
    if(!this.head){
        return
    }
    let node = this.head
    while(node){
        cb(node)
        node = node.next
    }
}

LinkedList

module.exports = { Node, LinkedList };
