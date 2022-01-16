    // Implement an algorithm to delete a node in the middle 
    // (i.e., any node but the first and last node, not necessarily the exact middle) 
    // of a singly linked list, given only access to that node.
const [LinkedList, LinkedListNode] = require('./linked-list');
function getMiddleNode(list) {
    let slow = list;
    let fast = list;
    while(fast.next) {
        
        if(!fast.next.next) {
            return slow;
        }
        fast = fast.next.next;
        slow = slow.next
    }
    return slow
}
function DeleteMiddle(middleNode) {
    middleNode.data = middleNode.next.data;
    middleNode.next = middleNode.next.next;
}
const list = new LinkedList();
list.insert('a');
list.insert('b');
list.insert('c');
list.insert('d');
list.insert('e');
list.insert('f');
list.insert('e');
list.insert('f');
const middleNode = getMiddleNode(list.head);
DeleteMiddle(middleNode)
console.log('list ', JSON.stringify(list.head));
