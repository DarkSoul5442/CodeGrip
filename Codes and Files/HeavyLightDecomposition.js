import React from 'react'
import hle from './Screenshot (54).png'
export const Heavylight_Decomposition=()=>{
    return(
        <div className='abcdef'>
            <h1 className="headss">HEAVY LIGHT DECOMPOSITION :</h1>
<p>Let there be a tree G of n vertices, with an arbitrary root.</p>
<p>The essence of this tree decomposition is to <b>split the tree into several paths</b> so that we can reach the root vertex from any v by traversing at most <b>log<sub>n</sub></b> paths. In addition, none of these paths should intersect with another.</p>
<p>It is clear that if we find such a decomposition for any tree, it will allow us to reduce certain single queries of the form “calculate something on the path from aa to bb” to several queries of the type ”calculate something on the segment <b>[l,r]</b> of the <b>kth</b> path”.</p>
<h2 className="heads2">BASIC IDEA :</h2>
<p>We will divide the tree into <b>vertex-disjoint chains</b> ( Meaning no two chains has a node in common ) in such a way that to move from any node in the tree to the root node, we will have to change at most log N chains. To put it in another words, the path from any node to root can be broken into pieces such that the each piece belongs to only one chain, then we will have no more than <b>log N</b> pieces.</p>
<p>Let us assume that the above is done, So what?. Now the path from any node A to any node B can be  broken into two paths:</p>
<p> <b>A</b> to <b>LCA( A, B )</b> and <b>B</b> to <b>LCA( A, B ).</b> So at this point we need to only worry about paths of the following format: Start at some node and go up the tree because <b>to LCA( A, B ) and B to LCA( A, B )</b> are both such paths.</p>
<p>What are we up to till now?</p>
<ul>
    <li>We assumed that we can break tree into chains such that we will have to change at most log N chains to move from any node up the tree to any other node.</li>
    <li>Any path can be broken into two paths such both paths start at some node and move up the tree</li>
    <li>We already know that queries in each chain can be answered with <b>O( log N )</b> complexity and there are at most log N chains we need to consider per path. So on the whole we have <b>O( log^2 N )</b> complexity solution. Great!!</li>
</ul>

<p>Till now we know how HLD can be used to reduce complexity. Now we shall see details about how HLD actually decomposes the tree.</p>
<p>What happens if you go to each node, find the special child and special edge and mark all special edges with green color and other edges are still black? Well, what happens is <b>HLD</b>. What would the graph look like then? Colorful yes. Not just colorful. Green edges actually forms vertex disjoint chains and black edges will be the connectors between chains. Let us explore one chain, start at root, move to the special child of root (there is only one special child, so easy pick), then to its special child and so on until you reach a leaf node, what you just traveled is a chain which starts at root node. Let us assume that root node has <b>m</b> child nodes. Note that all <b>m-1</b> normal child nodes are starting nodes of some other chains.</p>
  <p>What happens if you move from a node to a normal child node of it. This is the most important part. When you move from a node to any of its normal child, the sub-tree size is at most half the sub-tree size of current node. Consider a node X whose sub-tree size is s and has m child nodes. If m=1, then the only child is special child (So there is no case of moving to normal child). For m&lt;=2, sub-tree size of any normal child is m&gt;=s/2. To prove that, let us talk about the sub-tree size of special child. What is the least sub-tree size possible for special child? Answer is ceil( s/m )  To prove it, let us assume it is less than ceil( s/m ). As this child is the one with maximum sub-tree size, all other normal child nodes will be at most as large as special child, m child nodes with each less than ceil( s/m ) will not sum up to s, so with this counter-intuition. We have the following: The minimum sub-tree size possible for special child is ceil( s/m ). This being said, the maximum size for normal child is  s/2. So when ever you move from a node to a normal child, the sub-tree size is at most half the sub-tree size of parent node.</p> 
<p>We stated early that to move from root to any node (or vice-versa) we need to change at most log N chains. Here is the proof; Changing a chain means we are moving for a node to a normal child, so each time we change chain we are at least halving the sub-tree size. For a tree with size N, we can halve it at most log N times.</p>
<p>Above algorithm correctly does HLD. But we will need bit more information when solving HLD related problems. We should be able to answer the following questions:</p>
<p>1.	Given a node, to which chain does that node belong to.</p>
<p>2.	Given a node, what is the position of that node in its chain.</p>
<p>3.	Given a chain, what is the head of the chain.</p>
<p>4.	Given a chain, what is the length of the chain.</p>
<h2 className="heads2">IMPLEMENTATION :</h2>



    <img className="abc"src ={hle}/>
 
<h2 className="heads2">VIDEO EXPLANATION :</h2>
<iframe className="embedd" width="560" height="315" src="https://www.youtube.com/embed/1PvT2d9lgqY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
export const Heavylight_DecompositionPracticeQusetions =()=>{
    return(
        <div className='abcdef'>
          <p> 1.)	https://www.spoj.com/problems/QTREE/</p>
<p>2.)	https://www.spoj.com/problems/QTREE2/</p>
<p>3.)	https://www.spoj.com/problems/QTREE3/</p>
<p>4.)	https://www.spoj.com/problems/QTREE4/</p>
<p>5.)	https://www.spoj.com/problems/QTREE5/</p>
<p>6.)	https://www.codechef.com/problems/RRTREE</p>
<p>7.)	https://www.codechef.com/problems/QUERY</p>
<p>8.)	https://www.codechef.com/problems/QTREE</p>
<p>9.)	https://www.codechef.com/problems/DGCD</p>
<p>10.)	https://www.codechef.com/problems/MONOPLOY</p>

        </div>
    );
};
