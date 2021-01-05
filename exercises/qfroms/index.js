// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples


const Stack = require('./stack');

class Queue {
    constructor(){
        this.stackA = new Stack();
        this.stackB = new Stack();
    }
    add(record) {
        this.stackA.push(record);
    }
    remove() {
        while(this.stackA.peek()) {
           const record = this.stackA.pop();
            this.stackB.push(record);
        }
        const removedValue = this.stackB.pop();
        while(this.stackB.peek()) {
           const record = this.stackB.pop();
            this.stackA.push(record);
        }
        return removedValue;
    }
    peek() {
        while(this.stackA.peek()) {
            const record = this.stackA.pop();
            this.stackB.push(record);
        }
        const peekValue = this.stackB.peek();
        while(this.stackB.peek()) {
           const record = this.stackB.pop();
            this.stackA.push(record);
        }
        return peekValue
    }
}

module.exports = Queue;
const q = new Queue();
q.add(1);
q.add(2);
q.peek();  // returns 1
q.remove(); // returns 1
q.remove(); // returns 2