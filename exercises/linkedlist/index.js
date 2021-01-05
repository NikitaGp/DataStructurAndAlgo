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
    //head = null;
    //size = 0;
    constructor() {
        this.head = null;
    }
    insertLastData(node, data) {
        if (node.next === null) {
            node.next = new Node(data);
            return ;
        } else {
            this.insertLastData(node.next, data)
        }
    }
    insertLast(data) {
        const node = new Node();
        if (this.head === null) {
            this.head = new Node(data);
        } else {
            this.insertLastData(this.head, data);
        }
       // this.size++;
    }
    insertFirst(data) {
        const node = new Node(data, this.head);
        this.head = node;
       // this.size++
    }
    size() {
       let count = 0;
       let node = this.head
       while(node) {
           node = node.next;
           count++;
       }
       return count;
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        if (!this.head) {
            return null;
        }
        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        return node;
    }
    clear() {
        this.head = null;
      //  this.size = 0;
    }

    removeFirst() {
        if (!this.head) {
            return null;
        }
        const removedNode = this.head;
        this.head = removedNode.next;
       
    }
    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }
        let previous =  this.head
        let node = this.head.next;
        while (node.next !== null) {
            
            previous = node
            node = node.next;
        }
            previous.next = null;
       
    }
    getAt(i) {
        if (!this.head) {
            return null;
        }
        let index = 0;
        let node = this.head;
        while (index <= i) {
            if (!node) {
                return null;
            } 
            if (i === index) {
                return node;
            }
            node = node.next;
           
            index++;
        }
       

    }
    removeAt(i) {
     //  stuck in this methode
        if (!this.head) {
            return
        }
        if (i === 0) {
            if (this.head.next) {
                this.head = this.head.next;
            } else {
                this.head = null
            }
            return
        }
       const previousNode = this.getAt(i -1)
        if (previousNode && previousNode.next) {
            if ( previousNode.next.next) {
                previousNode.next = previousNode.next.next;
            } else {
                previousNode.next = null;
            }
        } 
    }
    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node (data, null);
             return;
          }
      
        if (index === 0) {
            this.head = new Node (data, this.head);
            return;
          }
      
          const previous = this.getAt(index - 1) || this.getLast();
          const node = new Node(data, previous.next);
          previous.next = node;
        
    }

    forEach(fn){
        if (!this.head) {
            return ;
        }
       let  node = this.head;
        while(node) {
            fn(node);
            node = node.next
        }
        
    }
    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
    //1-2-3 prev =null ,temp = 1.next, 1.next = prev , prev = 1;
    // 1-2-3
    //curr = 1 , prev = null, next = 1.next
    //prev = 1, currnt = 2, next = 3
    //peev = 2, current = 3, next = null
        reverseLinkedList() {
        // let prev = null;
        // let current = this.head;
       
        // while(current) {
        //    let temp = current.next; 
        //    current.next = prev;
        //    prev = current;
        //    current = temp;
        // }
        // this.head = prev;
      
        function reverseUtil(node) {
            if (!node || !node.next) {
                return node
            }
            const head = reverseUtil(node.next);
            node.next.next = node;
            node.next = null;
            return head;
        }
        this.head =  reverseUtil(this.head);
        
         
    }
  
}

module.exports = { Node, LinkedList };
