"use strict";

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
function reverseUtil(node, i, n) {
  if (i == n) {
    return node;
  }

  i = i + 1;
  var head = reverseUtil(node.next, i, n);
  var temp = head; // reverse the node till the given range n

  if (i < n) {
    for (var a = 0; a < n - i; a++) {
      temp = temp.next;
    }
  }

  var temp2 = temp.next;
  temp.next = node;
  node.next = temp2;
  return head;
}

var reverseBetween = function reverseBetween(head, m, n) {
  var prev = null;
  var current = head;
  var m1 = 1;
  var n1 = 1;

  if (m == n) {
    return head;
  }

  while (m1 <= m) {
    if (m1 === m) {
      //sent the node from m to reverse
      var reverseNode = reverseUtil(current, n1, n); // get reversed nodes set to previous next

      if (prev) {
        prev.next = reverseNode;
        return head;
      }

      return reverseNode;
    }

    prev = current;
    current = current.next;
    m1++;
    n1++;
  }
};