class Node {
    data:any;
    left: any| null;
    right: any|null;
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
export class BinaryTree {
    data: any;
    root = null
    constructor(){
       
    }
    insert(data) {
        this.root = this.addNode(data, this.root)
    }
    addNode(data, node: Node) {
        if ( node === null) {
            node = new Node(data);
            return node;
        } 
        if (data < node.data ) {
            node.left =  this.addNode(data, node.left)
        }
        if (data > node.data ) {
            node.right =  this.addNode(data, node.right)
        }
       return node;
    }
    print(node) {
        if (node === null) {
            return
        } else {
            console.log(node.data);
            this.print(node.left);
            this.print(node.right)
        }
    }
    printPreOrder() {
        console.log(this.root.data);
        this.print(this.root.left);
        this.print(this.root.right);

    }
    printPostOrder() {
        this.print(this.root.left);
        this.print(this.root.right);
        console.log(this.root.data);

    }
    printInOrder() {
        this.print(this.root.left);
        console.log(this.root.data);
        this.print(this.root.right);
    }
}
var bn = new BinaryTree();
bn.insert(10);
bn.insert(1);
bn.insert(11);
bn.insert(18);
bn.insert(2);
bn.insert(3);
bn.insert(12);
console.log(bn.root) 
bn.printPreOrder();
bn.printPostOrder();
bn.printInOrder();

