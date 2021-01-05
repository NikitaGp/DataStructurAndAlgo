// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
  

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    this.weaveArr = new Queue();
    
    n = sourceOne.length > sourceTwo.length ? sourceOne.length - 1 : sourceTwo.length - 1
    while(n >= 0) {
        const s1 = sourceOne.remove();
        const s2 = sourceTwo.remove();
        if (typeof s1 !== 'undefined') {
            this.weaveArr.add(s1);

        }
        if (typeof s1 !== 'undefined') {
            this.weaveArr.add(s2);
        }
        n--;
    }
    return this.weaveArr;
}
const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);
const queueTwo = new Queue();
queueTwo.add('Hi');
queueTwo.add('There');
const q = weave(queueOne, queueTwo);
q.remove() // 1
q.remove() // 'Hi'
q.remove() // 2
q.remove() // 'There'

module.exports = weave;
