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
//this solution takes O(N) time, where N is the number ofelements in the linked list.
function RemoveDulicate(list) {
    const map = new Map();
    let head = list;
    let prevNode = null;
    while(list) {
        if(map.has(list.data)) {
            prevNode.next = list.next;
           
        } else {
            map.set(list.data, list.data);
            prevNode = list;
        }
        list = list.next
    }
    return head;
}
//ThiscoderunsinO(1)space,butO(N )time.
function RemoveDulicateWithOutHashTable(node) {
    let head = node;
    let prevNode = null;
    let currNode = null;
    while (node) {
        currNode = node.next;
        prevNode =null;
        while(currNode) {
            if (currNode.data === node.data) {
                prevNode.next = currNode.next;
            } else {
                prevNode = currNode;
            }
            currNode = currNode.next;
        }
        node = node.next;
    }
   
    return head;
}

const list = new LinkedList();

list.insert(1);
list.insert(5);
list.insert(3);
list.insert(2);
list.insert(1);
list.insert(5);
list.insert(8);
//console.log(`list ${JSON.stringify(list)}`)
console.log(`remove list ${JSON.stringify(RemoveDulicateWithOutHashTable(list.head))}`)
