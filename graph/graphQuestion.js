//Imagine we have a dataset that contains airports and routes. We can represent the graph as a Map where each key (node) is an airport and the value (edges) is an array airports that it can connect to.

const { DefaultSerializer } = require("v8");

const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

adjacencyList = new Map();
function addNodes(origin){
    adjacencyList.set(origin, []);
};
function addEdges(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}
airports.forEach(addNodes)
routes.forEach((route) => addEdges(...route));
const a = adjacencyList.entries();
console.log(a.next().value);
console.log('adjacencyList ', );

// Now that we have our graph represented in JavaScript,
// let’s try to determine if a route exists between PHX and BKK.
//Breadth-first Search (BFS) starts by pushing all of the direct 
//children to a queue (first-in, first-out). It then visits each item in queue 
//and adds the next layer of children to the back of the queue. 
//This example uses a Set to keep track of nodes that have already been visited.

function BFS(node) {
    const queue = [];
    const visited = new Map();
    queue.push(...adjacencyList.get(node));
    while(queue.length > 0) {
        u = queue.shift();
        if (u === 'BKK') {
            console.log('got it ');
        }
        if (!visited.has(u)) {
            visited.set(u);
            queue.push(...adjacencyList.get(u));
            console.log('Visited ', u);
        } 
        
    }
}
function dfs(node, visited = new Set()) { 
    visited.add(node);
    const destinations  = adjacencyList.get(node);
    for (destination of destinations) {
        if (destination === 'BKK') {
            console.log('got it ');
            return
        }
        if (!visited.has(destination)) {
            console.log('destination', destination)
            dfs(destination, visited)
        } 
    }
}
dfs('PHX')
//BFS('PHX')
