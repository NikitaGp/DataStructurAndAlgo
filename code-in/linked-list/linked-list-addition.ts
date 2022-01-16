import { Node, LinkedList } from "../../exercises/linkedlist";

 function additionLinkedList (l1 , l2, carry: number) {
    if (l1 == null && l2 == null && carry == 0) {
        return null;
    }
 
    let result = new Node();
    let value = carry;
    if (l1 != null) {
        value += l1.data;
    }
    if (l2 != null) {
        value += l2.data;
    }
    result.data =  value % 10;
    if (l1 !=null || l2 !=null) {
        let more = additionLinkedList(l1 == null? null: l1.next, l2 == null? null: l2.next, value >=10 ? 1: 0)
        result.next =  more;
    }
   
    return result
}
const l1 = new LinkedList();
l1.insertLast(7);
l1.insertLast(1);
l1.insertLast(6);
const l2 = new LinkedList();
l2.insertLast(5);
l2.insertLast(9);
l2.insertLast(2);
console.log(additionLinkedList(l1.head, l2.head, 0));