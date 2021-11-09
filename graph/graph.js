var vertis = ['A', 'B', 'C', 'D', 'E'];
var edges = [
   ['A', 'B'],
   ['B','C'],
   ['B', 'D'],
   ['C', 'E'],
   ['E', 'D']
];
//findConnectedNodes
// for loop which checks if A is there if yes push the connected node and return
function findConnectedNodes(node) {
    const connecteNode = [];
    for(var i =0; i < edges.length-1; i++) {
        if(edges[i][0] === node) {
            connecteNode.push(edges[i][1]);
        }
    }
    return connecteNode
}
console.log(findConnectedNodes('B'));
//hasConnection
function hasConnection(node1, node2) {
   return edges.some(edge =>  edge.indexOf(node1) > -1 && edge.indexOf(node2) > -1);
   
}

console.log(hasConnection('C', 'A'))