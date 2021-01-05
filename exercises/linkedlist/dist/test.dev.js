"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var L = require('./index');

var List = L.LinkedList;
var Node = L.Node;
test('List is a class', function () {
  expect(_typeof(List.prototype.constructor)).toEqual('function');
});
test('Node is a class', function () {
  expect(_typeof(Node.prototype.constructor)).toEqual('function');
});
describe('A Node', function () {
  test('has properties "data" and "next"', function () {
    var node = new Node('a', 'b');
    expect(node.data).toEqual('a');
    expect(node.next).toEqual('b');
  });
});
describe('Insert First', function () {
  test('appends a node to the start of the list', function () {
    var l = new List();
    l.insertFirst(1);
    expect(l.head.data).toEqual(1);
    l.insertFirst(2);
    expect(l.head.data).toEqual(2);
  });
});
describe('Size', function () {
  test('returns the number of items in the linked list', function () {
    var l = new List();
    expect(l.size()).toEqual(0);
    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);
    expect(l.size()).toEqual(4);
  });
});
describe('GetFirst', function () {
  test('returns the first element', function () {
    var l = new List();
    l.insertFirst(1);
    expect(l.getFirst().data).toEqual(1);
    l.insertFirst(2);
    expect(l.getFirst().data).toEqual(2);
  });
});
describe('GetLast', function () {
  test('returns the last element', function () {
    var l = new List();
    l.insertFirst(2);
    expect(l.getLast()).toEqual({
      data: 2,
      next: null
    });
    l.insertFirst(1);
    expect(l.getLast()).toEqual({
      data: 2,
      next: null
    });
  });
});
describe('Clear', function () {
  test('empties out the list', function () {
    var l = new List();
    expect(l.size()).toEqual(0);
    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);
    expect(l.size()).toEqual(4);
    l.clear();
    expect(l.size()).toEqual(0);
  });
});
describe('RemoveFirst', function () {
  test('removes the first node when the list has a size of one', function () {
    var l = new List();
    l.insertFirst('a');
    l.removeFirst();
    expect(l.size()).toEqual(0);
    expect(l.getFirst()).toEqual(null);
  });
  test('removes the first node when the list has a size of three', function () {
    var l = new List();
    l.insertFirst('c');
    l.insertFirst('b');
    l.insertFirst('a');
    l.removeFirst();
    expect(l.size()).toEqual(2);
    expect(l.getFirst().data).toEqual('b');
    l.removeFirst();
    expect(l.size()).toEqual(1);
    expect(l.getFirst().data).toEqual('c');
  });
});
describe('RemoveLast', function () {
  test('RemoveLast removes the last node when list is empty', function () {
    var l = new List();
    expect(function () {
      l.removeLast();
    }).not.toThrow();
  });
  test('RemoveLast removes the last node when list is length 1', function () {
    var l = new List();
    l.insertFirst('a');
    l.removeLast();
    expect(l.head).toEqual(null);
  });
  test('RemoveLast removes the last node when list is length 2', function () {
    var l = new List();
    l.insertFirst('b');
    l.insertFirst('a');
    l.removeLast();
    expect(l.size()).toEqual(1);
    expect(l.head.data).toEqual('a');
  });
  test('RemoveLast removes the last node when list is length 3', function () {
    var l = new List();
    l.insertFirst('c');
    l.insertFirst('b');
    l.insertFirst('a');
    l.removeLast();
    expect(l.size()).toEqual(2);
    expect(l.getLast().data).toEqual('b');
  });
});
describe('InsertLast', function () {
  test('adds to the end of the list', function () {
    var l = new List();
    l.insertFirst('a');
    l.insertLast('b');
    expect(l.size()).toEqual(2);
    expect(l.getLast().data).toEqual('b');
  });
});
describe('GetAt', function () {
  test('returns the node at given index', function () {
    var l = new List();
    expect(l.getAt(10)).toEqual(null);
    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    expect(l.getAt(0).data).toEqual(1);
    expect(l.getAt(1).data).toEqual(2);
    expect(l.getAt(2).data).toEqual(3);
    expect(l.getAt(3).data).toEqual(4);
  });
});
describe('RemoveAt', function () {
  test('removeAt doesnt crash on an empty list', function () {
    var l = new List();
    expect(function () {
      l.removeAt(0);
      l.removeAt(1);
      l.removeAt(2);
    }).not.toThrow();
  });
  test('removeAt doesnt crash on an index out of bounds', function () {
    var l = new List();
    expect(function () {
      var l = new List();
      l.insertFirst('a');
      l.removeAt(1);
    }).not.toThrow();
  });
  test('removeAt deletes the first node', function () {
    var l = new List();
    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    expect(l.getAt(0).data).toEqual(1);
    l.removeAt(0);
    expect(l.getAt(0).data).toEqual(2);
  });
  test('removeAt deletes the node at the given index', function () {
    var l = new List();
    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    expect(l.getAt(1).data).toEqual(2);
    l.removeAt(1);
    expect(l.getAt(1).data).toEqual(3);
  });
  test('removeAt works on the last node', function () {
    var l = new List();
    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    expect(l.getAt(3).data).toEqual(4);
    l.removeAt(3);
    expect(l.getAt(3)).toEqual(null);
  });
});
describe('InsertAt', function () {
  test('inserts a new node with data at the 0 index when the list is empty', function () {
    var l = new List();
    l.insertAt('hi', 0);
    expect(l.getFirst().data).toEqual('hi');
  });
  test('inserts a new node with data at the 0 index when the list has elements', function () {
    var l = new List();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertAt('hi', 0);
    expect(l.getAt(0).data).toEqual('hi');
    expect(l.getAt(1).data).toEqual('a');
    expect(l.getAt(2).data).toEqual('b');
    expect(l.getAt(3).data).toEqual('c');
  });
  test('inserts a new node with data at a middle index', function () {
    var l = new List();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertLast('d');
    l.insertAt('hi', 2);
    expect(l.getAt(0).data).toEqual('a');
    expect(l.getAt(1).data).toEqual('b');
    expect(l.getAt(2).data).toEqual('hi');
    expect(l.getAt(3).data).toEqual('c');
    expect(l.getAt(4).data).toEqual('d');
  });
  test('inserts a new node with data at a last index', function () {
    var l = new List();
    l.insertLast('a');
    l.insertLast('b');
    l.insertAt('hi', 2);
    expect(l.getAt(0).data).toEqual('a');
    expect(l.getAt(1).data).toEqual('b');
    expect(l.getAt(2).data).toEqual('hi');
  });
  test('insert a new node when index is out of bounds', function () {
    var l = new List();
    l.insertLast('a');
    l.insertLast('b');
    l.insertAt('hi', 30);
    expect(l.getAt(0).data).toEqual('a');
    expect(l.getAt(1).data).toEqual('b');
    expect(l.getAt(2).data).toEqual('hi');
  });
});
describe('ForEach', function () {
  test('applies a transform to each node', function () {
    var l = new List();
    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    l.forEach(function (node) {
      node.data += 10;
    });
    expect(l.getAt(0).data).toEqual(11);
    expect(l.getAt(1).data).toEqual(12);
    expect(l.getAt(2).data).toEqual(13);
    expect(l.getAt(3).data).toEqual(14);
  });
});
describe('for...of loops', function () {
  test('works with the linked list', function () {
    var l = new List();
    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = l[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var node = _step.value;
        node.data += 10;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    expect(l.getAt(0).data).toEqual(11);
    expect(l.getAt(1).data).toEqual(12);
    expect(l.getAt(2).data).toEqual(13);
    expect(l.getAt(3).data).toEqual(14);
  });
  test('for...of works on an empty list', function () {
    var l = new List();
    expect(function () {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = l[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var node = _step2.value;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }).not.toThrow();
  });
});
describe('Reverse Linked List', function () {
  test('reverse the linked list', function () {
    var l = new List();
    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    l.reverseLinkedList();
    expect(l.getAt(0).data).toEqual(4);
    expect(l.getAt(1).data).toEqual(3);
    expect(l.getAt(2).data).toEqual(2);
    expect(l.getAt(3).data).toEqual(1);
  });
});