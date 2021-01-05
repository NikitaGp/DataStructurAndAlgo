"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document
var Node = function Node(data) {
  var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  _classCallCheck(this, Node);

  this.data = data;
  this.next = next;
};

var LinkedList =
/*#__PURE__*/
function () {
  //head = null;
  //size = 0;
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.head = null;
  }

  _createClass(LinkedList, [{
    key: "insertLastData",
    value: function insertLastData(node, data) {
      if (node.next === null) {
        node.next = new Node(data);
        return;
      } else {
        this.insertLastData(node.next, data);
      }
    }
  }, {
    key: "insertLast",
    value: function insertLast(data) {
      var node = new Node();

      if (this.head === null) {
        this.head = new Node(data);
      } else {
        this.insertLastData(this.head, data);
      } // this.size++;

    }
  }, {
    key: "insertFirst",
    value: function insertFirst(data) {
      var node = new Node(data, this.head);
      this.head = node; // this.size++
    }
  }, {
    key: "size",
    value: function size() {
      var count = 0;
      var node = this.head;

      while (node) {
        node = node.next;
        count++;
      }

      return count;
    }
  }, {
    key: "getFirst",
    value: function getFirst() {
      return this.head;
    }
  }, {
    key: "getLast",
    value: function getLast() {
      if (!this.head) {
        return null;
      }

      var node = this.head;

      while (node.next) {
        node = node.next;
      }

      return node;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.head = null; //  this.size = 0;
    }
  }, {
    key: "removeFirst",
    value: function removeFirst() {
      if (!this.head) {
        return null;
      }

      var removedNode = this.head;
      this.head = removedNode.next;
    }
  }, {
    key: "removeLast",
    value: function removeLast() {
      if (!this.head) {
        return;
      }

      if (!this.head.next) {
        this.head = null;
        return;
      }

      var previous = this.head;
      var node = this.head.next;

      while (node.next !== null) {
        previous = node;
        node = node.next;
      }

      previous.next = null;
    }
  }, {
    key: "getAt",
    value: function getAt(i) {
      if (!this.head) {
        return null;
      }

      var index = 0;
      var node = this.head;

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
  }, {
    key: "removeAt",
    value: function removeAt(i) {
      //  stuck in this methode
      if (!this.head) {
        return;
      }

      if (i === 0) {
        if (this.head.next) {
          this.head = this.head.next;
        } else {
          this.head = null;
        }

        return;
      }

      var previousNode = this.getAt(i - 1);

      if (previousNode && previousNode.next) {
        if (previousNode.next.next) {
          previousNode.next = previousNode.next.next;
        } else {
          previousNode.next = null;
        }
      }
    }
  }, {
    key: "insertAt",
    value: function insertAt(data, index) {
      if (!this.head) {
        this.head = new Node(data, null);
        return;
      }

      if (index === 0) {
        this.head = new Node(data, this.head);
        return;
      }

      var previous = this.getAt(index - 1) || this.getLast();
      var node = new Node(data, previous.next);
      previous.next = node;
    }
  }, {
    key: "forEach",
    value: function forEach(fn) {
      if (!this.head) {
        return;
      }

      var node = this.head;

      while (node) {
        fn(node);
        node = node.next;
      }
    }
  }, {
    key: Symbol.iterator,
    value:
    /*#__PURE__*/
    regeneratorRuntime.mark(function value() {
      var node;
      return regeneratorRuntime.wrap(function value$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              node = this.head;

            case 1:
              if (!node) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return node;

            case 4:
              node = node.next;
              _context.next = 1;
              break;

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, value, this);
    }) //1-2-3 prev =null ,temp = 1.next, 1.next = prev , prev = 1;
    // 1-2-3
    //curr = 1 , prev = null, next = 1.next
    //prev = 1, currnt = 2, next = 3
    //peev = 2, current = 3, next = null

  }, {
    key: "reverseLinkedList",
    value: function reverseLinkedList() {
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
          return node;
        }

        var head = reverseUtil(node.next);
        node.next.next = node;
        node.next = null;
        return head;
      }

      this.head = reverseUtil(this.head);
    }
  }]);

  return LinkedList;
}();

module.exports = {
  Node: Node,
  LinkedList: LinkedList
};