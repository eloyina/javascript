function UndirectedGraph() {
this.edges = {};
 }
 
 UndirectedGraph.prototype.addVertex = function(vertex) {
 this.edges[vertex] = {};
 }
 
 UndirectedGraph.prototype.addEdge = function(vertex1,vertex2, weight)
{
 if (weight == undefined) {
 weight = 0;
 }
 this.edges[vertex1][vertex2] = weight;
 this.edges[vertex2][vertex1] = weight;
 }
 
var graph1 = new UndirectedGraph();
graph1.addVertex(1);
graph1.addVertex(2);
graph1.addEdge(1,2, 1);
graph1.edges; // 1: {2: 0}, 2: {1: 0}
 graph1.addVertex(3);
 graph1.addVertex(4);
 graph1.addVertex(5);
 graph1.addEdge(2,3, 8);
 graph1.addEdge(3,4, 10);
 graph1.addEdge(4,5, 100);
 graph1.addEdge(1,5, 88);
 console.log(graph1)