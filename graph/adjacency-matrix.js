var vertices = ['A', 'B', 'C', 'D', 'E'];
var adjacencymatrix = [
   [0, 1 , 0, 0, 1], // A -> [ B, C]
   [1, 0 , 0, 1, 0],   // b-> [A, D]
   [0, 1 , 0, 0, 1], // c-> [B, E]
   [0, 0 , 1, 0, 1], // D-> [c]
   [1, 0 , 1, 0, 0], // E-> [A,c]
];
var vIdx = {
    'A': 0,
    'B': 1,
    'C': 2,
    'D': 3,
    'E':4
}
//adjacentNodes
function adjacentNodes(Node) {
    var nodeIdx = vIdx[Node];
    var adjacentNodes = []
 
        for (var i =0; i < adjacencymatrix[nodeIdx].length ;i++) {
            if (adjacencymatrix[nodeIdx][i] === 1){
                adjacentNodes.push(vertices[i])
            } 
        }
        return adjacentNodes;

}
//connections
//get indexs
// will check respective rows and check the if node exsit 
function connections (node1, node2) {
    let n1 = vIdx[node1];
    let n2 = vIdx[node2];
   return  !!(adjacencymatrix[n1][n2] === 1 || adjacencymatrix[n2][n1] === 1);
}
console.log(connections('E', 'A'));
console.log(adjacentNodes('A'));
