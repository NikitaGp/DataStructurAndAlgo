//Implement an algorithm to find the kth to last element of a singly linked list. 

function Node(data) {
    this.data = data;
    this.next = null;
}

function LinkedList(head = null) {
    this.head = head;
}
LinkedList.prototype.insert = function(data) {
    if (this.head === null) {
        this.head = new Node(data); 
        return
    }
    let node = this.head;
    while(node.next) {
       node = node.next;
    }
    node.next = new Node(data);
}

function Idx() {
    this.value = 0;
}
function findLastKth1(head, k, idx) {
   
  // Each of these recursive solutions takes 0( n) space due to the recursive calls.
    if(head === null) {
        return null
    }
    const node = findLastKth1(head.next, 4, idx);
     idx.value = idx.value + 1;
    if (idx.value === k) {
        return head;
    }
    return node;
}
function kthToLast(head, k) {
    // This algorithm takes O(n) time and 0(1) space.
    p1 = head;
    p2 = head;
    for (let i = 0 ; i < k; i++) {
        if(p1 === null) return null;
        p1 = p1.next;
    }
    while(p1) {
        p2 = p2.next;
        p1 = p1.next
    }
    return p2
}
const list = new LinkedList();

list.insert(1);
list.insert(5);
list.insert(3);
list.insert(2);
list.insert(1);
list.insert(5);
list.insert(8);
//console.log(findLastKth1(list.head, 2, new Idx()));
console.log(kthToLast(list.head, 2))