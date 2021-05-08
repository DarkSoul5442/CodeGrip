import React from 'react'
import g1 from "./g1.PNG"
import g2 from "./g2.PNG"
import g3 from "./g3.PNG"
import g4 from "./g4.PNG"
import g5 from "./g5.PNG"
import g6 from "./g6.PNG"
import g7 from "./g7.PNG"
import g8 from "./g8.PNG"
import g9 from "./g9.PNG"
import g10 from "./g10.PNG"
import e1 from "./e1.PNG"
import e2 from "./e2.PNG"
import m1 from "./m.png"
import s1 from "./Screenshot (72).png"
import s2 from "./Screenshot (73).png"
import s3 from "./Screenshot (74).png"
import s4 from "./Screenshot (75).png"
import s5 from "./Screenshot (76).png"
import s6 from "./Screenshot (77).png"
import s7 from "./Screenshot (78).png"
import s8 from "./Screenshot (79).png"
import s9 from "./Screenshot (80).png"
import s10 from "./Screenshot (81).png"
import s11 from "./Screenshot (82).png"
import s12 from "./Screenshot (83).png"


export const GraphTheory=()=>{
    return(
        <div className='abcdef'>
            <h1>EXPLANATION :</h1>
<p>A Graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph. More formally a Graph can be defined as :</p>
<p>A Graph consists of a finite set of vertices(or nodes) and set of Edges which connect a pair of nodes.</p>
<p>Many programming problems can be solved by modeling the problem as a graph problem and using an appropriate graph algorithm. A typical example of a graph is a network of roads and cities in a country. Sometimes, though, the graph is hidden in the problem and it may be difficult to detect it.</p>
<h2 >UNDERSTANDING GRAPHS :</h2>
<p>A graph(V, E) is a set of vertices V1, V2…Vn and set of edges E = E1, E2,….En. Here, each distinct edge can identify using the unordered pair of vertices (Vi, Vj). 2 vertices Vi and Vj are said to be adjacent if there is an edge whose endpoints are Vi and Vj. Thus E is said to be a connect of Vi and Vj. Let’s discuss various types of graph in the data structure below.</p>
<ul>
<li>Order of the graph = The number of vertices in the graph.</li>
<li>baab</li>
<li>Size of the graph = The number of edges in the graph.</li>
<li>Degree of a vertex of a graph = Number of edges incident to the vertex.</li>
</ul>
<div>
    <img className="abc" src ={s1}/>
</div> 
<h2 >Graph representation </h2>
<p>There are several ways to represent graphs in algorithms. The choice of a data structure depends on the size of the graph and the way the algorithm processes it. Next we will go through three common representations. Adjacency list representation In the adjacency list representation, each node x in the graph is assigned an adjacency list that consists of nodes to which there is an edge from x. Adjacency lists are the most popular way to represent graphs, and most algorithms can be efficiently implemented using them. A convenient way to store the adjacency lists is to declare an array of vectors as follows:</p>
<div>
    <img className="abc" src ={s2}/>
</div> 
<p>The constant N is chosen so that all adjacency lists can be stored. For example, the graph :</p>
<div>
<img className="abc" src ={s3}/>
</div> 
<p>can be stored as follows:</p>
<div>
<img className="abc" src ={s4}/>
</div> 
<p>If the graph is undirected, it can be stored in a similar way, but each edge is added in both directions. For a weighted graph, the structure can be extended as follows:</p>
<div>
<img className="abc" src ={s5}/>
</div> 
<p>In this case, the adjacency list of node a contains the pair (b,w) always when there is an edge from node a to node b with weight w. For example, the graph :</p>
<div>
    <img className="abc" src ={s6}/>
</div> 
<p>can be stored as follows:</p>
<div>
<img className="abc" src ={s7}/>
</div> 
<p>The benefit of using adjacency lists is that we can efficiently find the nodes to which we can move from a given node through an edge. For example, the following loop goes through all nodes to which we can move from node s:</p>
<div>
<img className="abc" src ={s8}/>
</div>
<h2 className="heads2">Adjacency matrix representation </h2>
<p>An adjacency matrix is a two-dimensional array that indicates which edges the graph contains. We can efficiently check from an adjacency matrix if there is an edge between two nodes. The matrix can be stored as an array</p>
<div>
<img className="abc" src ={s9}/>
</div>
<p>where each value adj[a][b] indicates whether the graph contains an edge from node a to node b. If the edge is included in the graph, then adj[a][b] = 1, and otherwise adj[a][b] = 0. For example, the graph</p>
<div>
<img className="abc" src ={s10}/>
</div>
<p>can be represented as follows:</p>
<div>
<img className="abc" src ={s11}/>
</div>
<p>If the graph is weighted, the adjacency matrix representation can be extended so that the matrix contains the weight of the edge if the edge exists. Using this representation, the graph</p>
<div>
<img className="abc" src ={s12}/>
</div>
<p>corresponds to the following matrix:</p>

<p>The drawback of the adjacency matrix representation is that the matrix contains n 2 elements, and usually most of them are zero. For this reason, the representation cannot be used if the graph is large.</p>
<h2 className="heads2">VIDEO EXPLANATION :</h2>
<iframe className="embedd" width="560" height="315" src="https://www.youtube.com/embed/LCrovIMurxY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p></p>
<p>
    <p></p>
</p>

<iframe className="embedd" width="560" height="315" src="https://www.youtube.com/embed/bTtm2ky7I3Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
    )
}
export const Bfs=()=>{
    return(
        <div className='abcdef'>
            <h1>Coming Soon</h1>
        </div>
    )
}
export const Dfs=()=>{
    return(
        <div className='abcdef'>
            <h1>Coming Soon</h1>
        </div>
    )
}
export const Dijkstra=()=>{
    return(
        <div className='abcdef'>
            <h1>Coming Soon</h1>
        </div>
    )
}
export const MinSpan=()=>{
    return(
        <div className='abcdef'>
            <h1 className="headss">MINIMUM SPANNING TREE : Kruskal’s Algorithm</h1>
            <p>Given a weighted undirected graph. We want to find a subtree of this graph which connects all vertices (i.e. it is a spanning tree) and has the least weight (i.e. the sum of weights of all the edges is minimum) of all possible spanning trees. This spanning tree is called a minimum spanning tree.</p>
            <p>In the left image you can see a weighted undirected graph, and in the right image you can see the corresponding minimum spanning tree.</p>
            <img className="abc" src={g8} />
            <p>This article will discuss few important facts associated with minimum spanning trees, and then will give the simplest implementation of Kruskal's algorithm for finding minimum spanning tree.</p>
            <u ><h2 className="heads2">Properties of the minimum spanning tree :</h2></u>
            <ul>
                <li>A minimum spanning tree of a graph is unique, if the weight of all the edges are distinct. Otherwise, there may be multiple minimum spanning trees. (Specific algorithms typically output one of the possible minimum spanning trees).</li>
                <li>Minimum spanning tree is also the tree with minimum product of weights of edges. (It can be easily proved by replacing the weights of all edges with their logarithms)</li>
                <li>In a minimum spanning tree of a graph, the maximum weight of an edge is the minimum possible from all possible spanning trees of that graph. (This follows from the validity of Kruskal's algorithm).</li>
                <li>The maximum spanning tree (spanning tree with the sum of weights of edges being maximum) of a graph can be obtained similarly to that of the minimum spanning tree, by changing the signs of the weights of all the edges to their opposite and then applying any of the minimum spanning tree algorithm.</li>
           
            </ul>
            <u ><h2 className="heads2">Kruskal's algorithm</h2></u>
            <p>This algorithm was described by Joseph Bernard Kruskal, Jr. in 1956.</p>
            <p>Kruskal's algorithm initially places all the nodes of the original graph isolated from each other, to form a forest of single node trees, and then gradually merges these trees, combining at each iteration any two of all the trees with some edge of the original graph. Before the execution of the algorithm, all edges are sorted by weight (in non-decreasing order). Then begins the process of unification: pick all edges from the first to the last (in sorted order), and if the ends of the currently picked edge belong to different subtrees, these subtrees are combined, and the edge is added to the answer. After iterating through all the edges, all the vertices will belong to the same sub-tree, and we will get the answer.</p>
            <u ><h2 className="heads2">Implementation</h2></u>
            <img className="abc" src={g9} />
            <p></p>
            <u ><h2 className="heads2">Video Explanation</h2></u>
            <iframe className="embedd" width="560" height="315" src="https://www.youtube.com/embed/1KRmCzBl_mQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       
        </div>
    )
}
export const DisSet=()=>{
    return(
        <div className='abcdef'>
            <h1 className="headss">DISJOINT SET UNION </h1>
            <p> This article discusses the data structure <b>Disjoint Set Union</b> or <b>DSU </b>. Often it is also called <b>Union Find</b> because of its two main operations.</p>
            <p>This data structure provides the following capabilities. We are given several elements, each of which is a separate set. A DSU will have an operation to combine any two sets, and it will be able to tell in which set a specific element is. The classical version also introduces a third operation, it can create a set from a new element.</p>
            <p>Thus the basic interface of this data structure consists of only three operations :</p>
            <ul>
                <li><b>Make_set(v) </b> - creates a new set consisting of the new element <b>v</b></li> 
                <li><b>Union_sets(a, b) </b> - merges the two specified sets (the set in which the element <b>a</b> is located, and the set in which the element b is located)</li>
                <li><b>Find_set(v) </b> - returns the representative (also called leader) of the set that contains the element <b>v</b>. This representative is an element of its corresponding set. It is selected in each set by the data structure itself (and can change over time, namely after <b>union_sets</b> calls). This representative can be used to check if two elements are part of the same set or not. a and b are exactly in the same set, if <b> find_set(a) == find_set(b)</b>. Otherwise they are in different sets.</li>
            </ul>
            <p>As described in more detail later, the data structure allows you to do each of these operations in almost O(1)O(1) time on average.</p>
            <p>Also in one of the subsections an alternative structure of a DSU is explained, which achieves a slower average complexity of O(logn)O(log⁡n), but can be more powerful than the regular DSU structure.</p>
            <u ><h2 className="heads2">Naive implementation:</h2></u>
            <p>We can already write the first implementation of the Disjoint Set Union data structure. It will be pretty inefficient at first, but later we can improve it using two optimizations, so that it will take nearly constant time for each function call.</p>
            <p>As we said, all the information about the sets of elements will be kept in an array <b>parent</b>.</p>
            <p>To create a new set (operation <b>make_set(v))</b>, we simply create a tree with root in the vertex v, meaning that it is its own ancestor.</p>
        <p>To combine two sets (operation <b>union_sets(a, b))</b>, we first find the representative of the set in which a is located, and the representative of the set in which b is located. If the representatives are identical, that we have nothing to do, the sets are already merged. Otherwise, we can simply specify that one of the representatives is the parent of the other representative - thereby combining the two trees.</p>
            <p>Finally the implementation of the find representative function (operation <b>find_set(v))</b>: we simply climb the ancestors of the vertex v until we reach the root, i.e. a vertex such that the reference to the ancestor leads to itself. This operation is easily implemented recursively.</p>
            <img className="abc" src={g1} />
            <p>However this implementation is inefficient. It is easy to construct an example, so that the trees degenerate into long chains. In that case each call find_set(v) can take <b>O(n)O(n)</b> time.</p>
            <p>This is far away from the complexity that we want to have (nearly constant time). Therefore we will consider two optimizations that will allow to significantly accelerate the work.</p>
            <u ><h2 className="heads2">Path compression optimization</h2></u>
            <p>This optimization is designed for speeding up <b>find_set</b>.</p>
            <p>If we call <b>find_set(v) </b>for some vertex v, we actually find the representative p for all vertices that we visit on the path between v and the actual representative p. The trick is to make the paths for all those nodes shorter, by setting the parent of each visited vertex directly to p.</p>
        <p>The new implementation of <b>find_set</b> is as follows:</p>
        <img className="abc" src={g2}/>
        <p>The simple implementation does what was intended: first find the representative of the set (root vertex), and then in the process of stack unwinding the visited nodes are attached directly to the representative.</p>
        <p>This simple modification of the operation already achieves the time complexity O(logn)O(log⁡n) per call on average (here without proof). There is a second modification, that will make it even faster.</p>
        <u ><h2 className="heads2">Union by size / rank</h2></u>
        <p>In this optimization we will change the union_set operation. To be precise, we will change which tree gets attached to the other one. In the naive implementation the second tree always got attached to the first one. In practice that can lead to trees containing chains of length O(n)O(n). With this optimization we will avoid this by choosing very carefully which tree gets attached.</p>
       <p>There are many possible heuristics that can be used. Most popular are the following two approaches: In the first approach we use the size of the trees as rank, and in the second one we use the depth of the tree (more precisely, the upper bound on the tree depth, because the depth will get smaller when applying path compression).</p>
        <p>In both approaches the essence of the optimization is the same: we attach the tree with the lower rank to the one with the bigger rank.</p>
        <p>Here is the implementation of union by size:</p>
        <img className="abc"src={g3}/>
        <p></p>
        <p>And here is the implementation of union by rank based on the depth of the trees:</p>
        <img className="abc"src={g4}/>
        <p>Both optimizations are equivalent in terms of time and space complexity. So in practice you can use any of them.</p>
        <u ><h2 className="heads2">Time complexity</h2></u>
        <p>As mentioned before, if we combine both optimizations - path compression with union by size / rank - we will reach nearly constant time queries. It turns out, that the final amortized time complexity is O(α(n)), where α(n) is the inverse Ackermann function, which grows very slowly. In fact it grows so slowly, that it doesn't exceed 4 for all reasonable nn (approximately n &gt; 10600).</p>
        <p>Amortized complexity is the total time per operation, evaluated over a sequence of multiple operations. The idea is to guarantee the total time of the entire sequence, while allowing single operations to be much slower then the amortized time. E.g. in our case a single call might take O(logn) in the worst case, but if we do mm such calls back to back we will end up with an average time of O(α(n)).</p>
        <u ><h2 className="heads2">VIDEO EXPLANATION :</h2></u>
        <iframe className="embedd" width="560" height="315" src="https://www.youtube.com/embed/3gbO7FDYNFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       
        </div>
    )
}
export const Lca =()=>{
    return(
        <div className='abcdef'>
            <h1 className="headss">LOWEST COMMON ANCESTOR :</h1>
            <p>Let GG be a tree. For every query of the form <b>(u, v)</b> we want to find the lowest common ancestor of the nodes <b>u</b> and <b>v</b>, i.e. we want to find a node w that lies on the path from <b>u</b> to the root node, that lies on the path from <b> v</b> to the root node, and if there are multiple nodes we pick the one that is farthest away from the root node. In other words the desired node w is the lowest ancestor of u and v. In particular if u is an ancestor of v, then u is their lowest common ancestor.</p>
            <p>The algorithm described in this article will need O(NlogN) for preprocessing the tree, and then O(logN) for each LCA query.</p>
            <u ><h2 className="heads2">Algorithm</h2></u>
            <p>For each node we will precompute its ancestor above him, its ancestor two nodes above, its ancestor four above, etc. Let's store them in the array up, i.e.<b> up[i][j]</b> is the 2^j-th ancestor above the node i with <b>i=1...N, j=0...ceil(log(N))</b>. These information allow us to jump from any node to any ancestor above it in O(logN) time. We can compute this array using a DFS traversal of the tree.</p>
            <p>For each node we will also remember the time of the first visit of this node (i.e. the time when the DFS discovers the node), and the time when we left it (i.e. after we visited all children and exit the DFS function). We can use this information to determine in constant time if a node is an ancestor of another node.</p>
            <p>Suppose now we received a query <b>(u, v)</b>. We can immediately check whether one node is the ancestor of the other. In this case this node is already the LCA. If u is not the ancestor of v, and v not the ancestor of u, we climb the ancestors of u until we find the highest (i.e. closest to the root) node, which is not an ancestor of v (i.e. a node x, such that x is not an ancestor of v, but up[x][0] is). We can find this node x in O(logN) time using the array <b>up</b>.</p>
            <p>We will describe this process in more detail. Let <b>L = ceil(log(N))</b>. Suppose first that <b>i = L. If up[u][i]</b> is not an ancestor of v, then we can assign u = up[u][i] and decrement i. If up[u][i] is an ancestor, then we just decrement i. Clearly after doing this for all non-negative i the node u will be the desired node - i.e. u is still not an ancestor of v, but <b>up[u][0]</b> is.</p>
            <p>Now, obviously, the answer to LCA will be <b>up[u][0]</b> - i.e., the smallest node among the ancestors of the node u, which is also an ancestor of v.</p>
            <p>So answering a LCA query will iterate i from <b>ceil(log(N))</b> to 0 and checks in each iteration if one node is the ancestor of the other. Consequently each query can be answered in O(logN).</p>
            <u ><h2 className="heads2">Implementation</h2></u>
            <img className="abc"  src={g10}/>
            <u ><h2 className="heads2">VIDEO EXPLANATION :</h2></u>
            <p></p>
            <p></p>
            <iframe className="embedd" width="560" height="315" src="https://www.youtube.com/embed/dOAxrhAUIhA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
export const Baa=()=>{
    return(
        <div className='abcdef'>
            <h1 className="headss">BRIDGES AND ARTICULATION POINT :</h1>
            <u ><h2 className="heads2">Finding bridges in a graph in O(N+M)</h2></u>
            <p>We are given an undirected graph. A bridge is defined as an edge which, when removed, makes the graph disconnected (or more precisely, increases the number of connected components in the graph). The task is to find all bridges in the given graph.</p>
            <p>Informally, the problem is formulated as follows: given a map of cities connected with roads, find all "important" roads, i.e. roads which, when removed, cause disappearance of a path between some pair of cities.</p>
            <p>The algorithm described here is based on depth first search and has O(N+M) complexity, where N is the number of vertices and MM is the number of edges in the graph.</p>
            <u ><h2 className="heads2">Implementation</h2></u>
            <img className="abc"  src={g5}/>
            <p></p>
            <u ><h2 className="heads2">Finding articulation points in a graph in O(N+M)</h2></u>
            <p>We are given an undirected graph. An articulation point (or cut vertex) is defined as a vertex which, when removed along with associated edges, makes the graph disconnected (or more precisely, increases the number of connected components in the graph). The task is to find all articulation points in the given graph.</p>
            <p>The algorithm described here is based on depth first search and has O(N+M) complexity, where N is the number of vertices and MM is the number of edges in the graph.</p>
            <u ><h2 className="heads2">Implementation</h2></u>
            <img className="abc"  src={g6}/>
            <u ><h2 className="heads2">VIDEO EXPLANATIONS :</h2></u>
            <iframe className="embedd" width="560" height="315" src="https://www.youtube.com/embed/3t3JHswP7mw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p></p>
            <p></p>
            <p></p>
            <iframe className="embedd" width="560" height="315" src="https://www.youtube.com/embed/2rjZH0-2lhk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
export const StrongConnected=()=>{
    return(
        <div className='abcdef'>
            <h1 className="headss">STRONGLY CONNECTED COMPONENTS :</h1>
            <p>You are given a directed graph G with vertices VV and edges E. It is possible that there are loops and multiple edges. Let's denote nn as number of vertices and mm as number of edges in G.</p>
            <p><b>Strongly connected component </b>is a maximal subset of vertices C such that any two vertices of this subset are reachable from each other, i.e. for any u,v∈C:</p>
            <p><b>u↦v,v↦u</b></p>
            <p>where ↦ means reachability, i.e. existence of the path from first vertex to the second.</p>
            <p>It is obvious, that strongly connected components do not intersect each other, i.e. this is a partition of all graph vertices. Thus we can give a definition of condensation graph GSCC as a graph containing every strongly connected component as one vertex. Each vertex of the condensation graph corresponds to the strongly connected component of graph G. There is an oriented edge between two vertices Ci and Cj of the condensation graph if and only if there are two vertices u∈Ci,v∈Cj such that there is an edge in initial graph, i.e. (u,v)∈E.</p>
            <p>The most important property of the condensation graph is that it is <b>acyclic</b>. Indeed, suppose that there is an edge between C and C′, let's prove that there is no edge from C′ to C. Suppose that C′↦C. Then there are two vertices u′∈C and v′∈C′ such that v′↦u′. But since u and u′ are in the same strongly connected component then there is a path between them; the same for v and v′. As a result, if we join these paths we have that v↦u and at the same time u↦v. Therefore uu and v should be at the same strongly connected component, so this is contradiction. This completes the proof.</p>
            <p>The algorithm described in the next section extracts all strongly connected components in a given graph. </p>
            <u ><h2 className="heads2">IMPLEMENTATION :</h2></u>
            <img className="abc"  src={g7}/>
            <u ><h2 className="heads2">VIDEO EXPLANATION :</h2></u>
            <iframe className="embedd" width="560" height="315" src="https://www.youtube.com/embed/V8qIqJxCioo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
export const Min_and_maxflow=()=>{
    return(
        <div className='abcdef'>
            <h1 className="headss">DINIC’S ALGORITHM :</h1>
            <p>Dinic’s algorithm uses following concepts : </p>
            <p><b>1. </b>	A flow is maximum if there is no s to t path in residual graph.</p>
            <p><b>2. </b>	BFS is used in a loop. There is a difference though in the way we use BFS in both algorithms.</p>
            <p>In Edmond’s Karp algorithm, we use BFS to find an augmenting path and send flow across this path. In Dinic’s algorithm, we use BFS to check if more flow is possible and to construct level graph. <b>In level graph</b>, we assign levels to all nodes, level of a node is shortest distance (in terms of number of edges) of the node from source. Once level graph is constructed, we send multiple flows using this level graph. This is the reason it works better than Edmond Karp. In Edmond Karp, we send only flow that is send across the path found by BFS.</p>
            <h2 className="heads2">Algorithm:</h2>
            <ul>
                <li>Initialize residual graph G as given graph.</li>
                <li>Do BFS of G to construct a level graph (or assign levels to vertices) and also check if more flow is possible.If more flow is not possible, then return. Send multiple flows in G using level graph until blocking flow is reached. Here using level graph means, in every flow, levels of path nodes should be 0, 1, 2... (in order) from s to t.</li>
            </ul>
            <h2 className="heads2">Time Complexity :</h2>
            <p> O(EV2). Doing a BFS to construct level graph takes O(E) time. Sending multiple more flows until a blocking flow is reached takes O(VE) time. The outer loop runs at-most O(V) time. In each iteration, we construct new level graph and find blocking flow. It can be proved that the number of levels increase at least by one in every iteration (Refer the below reference video for the proof). So the outer loop runs at most O(V) times. Therefore overall time complexity is O(EV2). </p>
            <h2 className="heads2">IMPLEMENTATION : </h2>
            <img src={m1}/>
            
       </div>
    )
}
export const Eulertour=()=>{
    return(
        <div className='abcdef'>
            <h1 className="headss">EULERS TOUR :</h1>
            <p>A Eulerian path is a path in a graph that passes through all of its edges exactly once. A Eulerian cycle is a Eulerian path that is a cycle.</p>
            <p>The problem is to find the Eulerian path in an <b>undirected multigraph with loops</b>.</p>
            <u><h2 className="heads2">Algorithm</h2></u>
            <p>First we can check if there is an Eulerian path. We can use the following theorem. An Eulerian cycle exists if and only if the degrees of all vertices are even. And an Eulerian path exists if and only if the number of vertices with odd degrees is two (or zero, in the case of the existence of a Eulerian cycle). In addition, of course, the graph must be sufficiently connected (i.e., if you remove all isolated vertices from it, you should get a connected graph).</p>
            <p>The find the Eulerian path / Eulerian cycle we can use the following strategy: We find all simple cycles and combine them into one - this will be the Eulerian cycle. If the graph is such that the Eulerian path is not a cycle, then add the missing edge, find the Eulerian cycle, then remove the extra edge.</p>
            <u><h2 className="heads2">IMPLEMENTATION USING RECURSION :</h2></u>
            <img className="abc" src={e1}/>
            <u><h2 className="heads2">IMPLEMENTATION WITHOUT RECURSION :</h2></u>
            <img className="abc" src={e2}/>
        </div>
    )
}
export const GraphTheoryPracticeQusetions =()=>{
    return(
        <div className='abcdef'>
            <h1 className="headss">Practise questions for Graphs </h1>
            <h2 className="heads2">1.)	DFS</h2>
            <ul>
                <li>https://codeforces.com/contest/734/problem/E</li>
                <li>https://codeforces.com/contest/727/problem/A</li>
                <li>https://codeforces.com/contest/723/problem/E</li>
                <li>https://codeforces.com/contest/709/problem/E</li>
                <li>https://codeforces.com/contest/710/problem/E</li>
            </ul>
            <h2 className="heads2">2.)	BFS</h2>
            <ul>
                <li>https://codeforces.com/contest/653/problem/E</li>
                <li>https://codeforces.com/contest/769/problem/C</li>
                <li>https://codeforces.com/contest/796/problem/D</li>
                <li>https://codeforces.com/contest/821/problem/D</li>
                <li>https://www.spoj.com/problems/DIGOKEYS/</li>
              
            </ul>
            <h2 className="heads2">3.)	DIJKSTRA'S</h2>
            <ul>
                <li>https://codeforces.com/contest/716/problem/D</li>
                <li>https://codeforces.com/contest/757/problem/F</li>
                <li>https://codeforces.com/contest/827/problem/F</li>
                <li>https://www.spoj.com/problems/DELIVER/</li>
                <li>https://www.spoj.com/problems/CCHESS/</li>
            </ul>
            <h2 className="heads2">4.)	MINIMUM SPANNING TREE</h2>
            <ul>
                <li>https://www.spoj.com/problems/ULM09/</li>
                <li>https://www.spoj.com/problems/IITKWPCG/</li>
                <li>https://codeforces.com/contest/17/problem/B</li>
                
            </ul>
            <h2 className="heads2">1.)	DISJOINT SET UNION</h2>
            <ul>
            <li>a.	https://codeforces.com/contest/723/problem/F</li>
                <li>https://codeforces.com/contest/687/problem/D</li>
                <li>https://codeforces.com/contest/680/problem/E</li>
                <li>https://codeforces.com/contest/766/problem/D</li>
                <li>https://www.spoj.com/problems/LEXSTR/</li>
            </ul>
            <h2 className="heads2">5.) LCA</h2>
            <ul>
              
                <li>https://codeforces.com/contest/733/problem/F</li>
                <li>https://codeforces.com/contest/828/problem/F</li>
                <li>https://codeforces.com/contest/832/problem/D</li>
                <li>https://codeforces.com/problemset/problem/838/B</li>
                <li>https://codeforces.com/contest/855/problem/D</li>
            </ul>
            <h2 className="heads2">6.)	EULER'S TOUR</h2>
            <ul>
                <li>https://codeforces.com/contest/789/problem/D</li>
                <li>https://codeforces.com/contest/21/problem/D</li>
                <li>https://codeforces.com/contest/36/problem/E</li>
               
            </ul>
        </div>
    );
};
