const exp = require("constants");

function LinkedListNode(data) {
    this.data = data;
    this.next = null;
}

function LinkedList(head = null) {
    this.head = head;
}
LinkedList.prototype.insert = function(data) {
    if (this.head === null) {
        this.head = new LinkedListNode(data); 
        return
    }
    let node = this.head;
    while(node.next) {
       node = node.next;
    }
    node.next = new LinkedListNode(data);
}
LinkedList.prototype.poll = function(data) {
    if (this.head === null) {
        return null;
    }
    let firstNode = this.head.data;
    this.head = this.head.next;
    return firstNode;
}
LinkedList.prototype.peek = function(data) {
    if (this.head === null) {
        return null
    }
    return this.head.data;
}

module.exports = [LinkedList, LinkedListNode];