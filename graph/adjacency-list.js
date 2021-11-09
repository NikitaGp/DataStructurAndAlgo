var vertis = ['A', 'B', 'C', 'D', 'E'];
var edges = [
  0 ['c', 'B'],
  1 ['D','C'],
  2 ['B', 'D'],
  3 ['C', 'E'],
  4 ['A', 'D']
];
function Node(nodeValue) {
    this.value = nodeValue;
    this.edgeList = [];
    //connection Arrays
}
Node.prototype.connect = function(node) {
    this.edgeList.push(node.value)
}
function graph(nodes) {
    this.nodes = [...nodes];

}


const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');
const g = new graph([nodeA, nodeB, nodeC, nodeD, nodeE]);
nodeA.connect(nodeB);
nodeA.connect(nodeC);
nodeB.connect(nodeA);
nodeB.connect(nodeD);
nodeB.connect(nodeE);
nodeC.connect(nodeA);
nodeC.connect(nodeD);
nodeD.connect(nodeB);
nodeE.connect(nodeD);
for (var i = 0; i< g.nodes.length; i++) {
    const node = g.nodes[i];
    console.log(`${node.value} ${JSON.stringify(node.edgeList)}`)
}

function findAdajencyNodes(node) {
    return node.edgeList;
}
findAdajencyNodes(nodeA);