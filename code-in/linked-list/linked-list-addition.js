
const [LinkedList, LinkedListNode] = require('./linked-list');
function additionLinkedList(l1, l2, carry) {
    if (l1 == null && l2 == null && carry == 0) {
        return null;
    }
    var result = new LinkedListNode();
    var value = carry;
    if (l1 != null) {
        value += l1.data;
    }
    if (l2 != null) {
        value += l2.data;
    }
    result.data = value % 10;
    if (l1 != null || l2 != null) {
        var more = additionLinkedList(l1 == null ? null : l1.next, l2 == null ? null : l2.next, value >= 10 ? 1 : 0);
        result.next = more;
    }
    return result;
}
var l1 = new LinkedList();
l1.insert(7);
l1.insert(1);
l1.insert(6);
var l2 = new LinkedList();
l2.insert(5);
l2.insert(9);
l2.insert(2);
console.log(additionLinkedList(l1.head, l2.head, 0));
