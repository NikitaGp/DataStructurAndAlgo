// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    peekCount = null;
    constructor() {
        this.data = [];
    }
    add(record) {
        this.data.unshift(record);
        this.peekCount = this.data.length -1
    }
    remove() {
      return  this.data.pop();
    }
    peek() {
        if (this.peekCount === null) {
            return 
        }
        const peekValue =  this.data[this.peekCount];
        this.peekCount--;
        return peekValue;
    }
}

module.exports = Queue;
