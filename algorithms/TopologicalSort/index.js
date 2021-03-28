const topologicalSortHelper = (node, explored, s) => {
    explored.add(node);
    // Marks this node as visited and goes on to the nodes
    // that are dependent on this node, the edge is node ----> n
    this.edges[node].forEach(n => {
       if (!explored.has(n)) {
          this.topologicalSortHelper(n, explored, s);
       }
    });
    // All dependencies are resolved for this node, we can now add
    // This to the stack.
    s.push(node);
 }

const topologicalSort = () => {
    // Create a Stack to keep track of all elements in sorted order
    let s = new Stack(this.nodes.length);
    let explored = new Set();
 
    // For every unvisited node in our graph, call the helper.
    this.nodes.forEach(node => {
       if (!explored.has(node)) {
          this.topologicalSortHelper(node, explored, s);
       }
    });
 
    while (!s.isEmpty()) {
       console.log(s.pop());
    }
 }

let g = new Graph();
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");
g.addNode("F");
g.addNode("G");

g.addDirectedEdge("A", "C");
g.addDirectedEdge("A", "B");
g.addDirectedEdge("A", "D");
g.addDirectedEdge("C", "D");
g.addDirectedEdge("D", "E");
g.addDirectedEdge("E", "F");
g.addDirectedEdge("B", "G");

g.topologicalSort();
console.log(g);