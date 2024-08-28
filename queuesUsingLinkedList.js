class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.length = 0;
    }
    
    // Add element to the end 
    enqueue(element){
        // create a newNode
        // If length == 0, make newNode the first and last, this.length++
        // else, make the last.next point to the newNode, make tail the newNode, this.length++
        
        const newNode = new Node(element);
        // if length == 0
        if(!this.first){
            this.first = newNode;
        }else{
            this.last.next = newNode;
        }
        this.last = newNode;
        this.length++;
    }
    
    // Removes the first element
    dequeue(){
        // if length is 0, return null
        // if length is 1, return the first and make first and last as null, this.length--
        // else, store first in a var toRemoveNode, make the this.first = toRemoveNode.next, make return toRemoveNode.value, this.length--
        if(!this.first){
            return null
        }else if(this.first == this.last){
            // meaning only one node in the queue
            const toRemoveNode = this.first
            this.first = null;
            this.last = null;
            this.length--;
            return toRemoveNode.value
        }else{
            const toRemoveNode = this.first
            this.first = toRemoveNode.next
            this.length--;
            return toRemoveNode.value
        }
    }
    
    // Returns the first element
    peek(){
        // if no element return null
        // if length > 0, return the top
        return this.first ? this.first.value : null
    }
}

const myQueue = new Queue();
myQueue.enqueue("hi");
myQueue.enqueue("there");
myQueue.enqueue("whats up!");
myQueue.dequeue()
console.log(myQueue.dequeue())
myQueue.dequeue()

console.log(myQueue.peek())
