"use strict";
exports.__esModule = true;
exports.BinaryTree = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    return Node;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    BinaryTree.prototype.insert = function (data) {
        this.root = this.addNode(data, this.root);
    };
    BinaryTree.prototype.addNode = function (data, node) {
        if (node === null) {
            node = new Node(data);
            return node;
        }
        if (data < node.data) {
            node.left = this.addNode(data, node.left);
        }
        if (data > node.data) {
            node.right = this.addNode(data, node.right);
        }
        return node;
    };
    BinaryTree.prototype.print = function (node) {
        if (node === null) {
            return;
        }
        else {
            console.log(node.data);
            this.print(node.left);
            this.print(node.right);
        }
    };
    BinaryTree.prototype.printPreOrder = function () {
        console.log(this.root.data);
        this.print(this.root.left);
        this.print(this.root.right);
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
var bn = new BinaryTree();
bn.insert(10);
bn.insert(1);
bn.insert(11);
bn.insert(18);
bn.insert(2);
bn.insert(3);
bn.insert(12);
bn.printPreOrder();
console.log(bn.root);
