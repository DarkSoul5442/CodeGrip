import React from 'react'
import  segmenttrees_template from './Segment_Trees_Template.png'
import  ms1 from './ms1.png'
import  ms2 from './ms2.png'
import st from './st.png'
export const SegmentTrees=()=>{
    return(
        <div className='abcdef'>
            <h1 className="headss"> SEGMENT TREES</h1>
    <p>
        A Segment Tree is a data structure that allows answering range queries over an array effectively, while still being flexible enough to allow modifying the array. This includes finding the sum of consecutive array elements a[l…r], or finding the minimum element in a such a range in O(logn) time. Between answering such queries the Segment Tree allows modifying the array by replacing one element, or even change the elements of a whole subsegment (e.g. assigning all elements a[l…r] to any value, or adding a value to all element in the subsegment).</p>
    <p>In general a Segment Tree is a very flexible data structure, and a huge number of problems can be solved with it. Additionally it is also possible to apply more complex operations and answer more complex queries In particular the Segment Tree can be easily generalized to larger dimensions. For instance with a two-dimensional Segment Tree you can answer sum or minimum queries over some subrectangle of a given matrix. However only in O(log2n) time.</p>
    <p>One important property of Segment Trees is, that they require only a linear amount of memory. The standard Segment Tree requires 4n vertices for working on an array of size n.</p>
    <h2 className="heads2" >Simplest form of a Segment Tree</h2>    
  <p>To start easy, we consider the simplest form of a Segment Tree. We want to answer sum queries efficiently. The formal definition of our task is: We have an array a[0…n−1], and the Segment Tree must be able to find the sum of elements between the indices l and r (i.e. computing the sum ∑ri=l  a[i]), and also handle changing values of the elements in the array (i.e. perform assignments of the form a[i]=x.) The Segment Tree should be able to process both queries in O(logn) time.</p>
  <h2 className="heads2">Sum queries</h2>    
<p>For now we are going to answer sum queries. As an input we receive two integers  l and r, and we have to compute the sum of the segment a[l…r] in O(logn) time.</p>
  <p>To do this, we will traverse the Segment Tree and use the precomputed sums of the segments. Let's assume that we are currently at the vertex that covers the segment a[tl…tr]. There are three possible cases.</p>
  <p>The easiest case is when the segment a[l…r] is equal to the corresponding segment of the current vertex (i.e. a[l…r]=a[tl…tr]), then we are finished and can return the precomputed sum that is stored in the vertex.</p>
  <p>Alternatively the segment of the query can fall completely into the domain of either the left or the right child. Recall that the left child covers the segment a[tl…tm] and the right vertex covers the segment a[tm+1…tr] with tm=(tl+tr)/2. In this case we can simply go to the child vertex, which corresponding segment covers the query segment, and execute the algorithm described here with that vertex.</p>
  <p>And then there is the last case, the query segment intersects with both children. In this case we have no other option as to make two recursive calls, one for each child. First we go to the left child, compute a partial answer for this vertex (i.e. the sum of values of the intersection between the segment of the query and the segment of the left child), then go to the right child, compute the partial answer using that vertex, and then combine the answers by adding them. In other words, since the left child represents the segment a[tl…tm] and the right child the segment a[tm+1…tr], we compute the sum query a[l…tm] using the left child, and the sum query a[tm+1…r] using the right child.</p>
  <p>So processing a sum query is a function that recursively calls itself once with either the left or the right child (without changing the query boundaries), or twice, once for the left and once for the right child (by splitting the query into two subqueries). And the recursion ends, whenever the boundaries of the current query segment coincides with the boundaries of the segment of the current vertex. In that case the answer will be the precomputed value of the sum of this segment, which is stored in the tree.</p>
  <p>In other words, the calculation of the query is a traversal of the tree, which spreads through all necessary branches of the tree, and uses the precomputed sum values of the segments in the tree.</p>
  <p>Obviously we will start the traversal from the root vertex of the Segment Tree.</p>
  <h2 className="heads2">Update queries</h2>
<p>Now we want to modify a specific element in the array, let's say we want to do the assignment a[i]=x. And we have to rebuild the Segment Tree, such that it correspond to the new, modified array.</p>
<p>This query is easier than the sum query. Each level of a Segment Tree forms a partition of the array. Therefore an element a[i] only contributes to one segment from each level. Thus only O(logn) vertices need to be updated.</p>
<p>It is easy to see, that the update request can be implemented using a recursive function. The function gets passed the current tree vertex, and it recursively calls itself with one of the two child vertices (the one that contains a[i] in its segment), and after that recomputes its sum value, similar how it is done in the build method (that is as the sum of its two children).</p>
<h2 className="heads2">Segment Trees Template :</h2>
 
    
    <img className="abc" src={segmenttrees_template}/>

        </div>
    )

}
export const MergeSortTrees=()=>{
    return(
        <div className='abcdef'>
            <h1 > MERGE SORT TREE :</h1>
    <p> The key idea is to build a Segment Tree with a vector at every node and the vector contains all the elements of the subrange in a sorted order . And if you observe this segment tree structure this is some what similar to the tree formed during the merge sort algorithm ( Yes , thats why they are called Merge Sort Trees ) .</p>
    
    
    <h2 >Building the tree :</h2>    
  <p>To start easy, we consider the simplest form of a Segment Tree. We want to answer sum queries efficiently. The formal definition of our task is: We have an array a[0…n−1], and the Segment Tree must be able to find the sum of elements between the indices l and r (i.e. computing the sum ∑ri=l  a[i]), and also handle changing values of the elements in the array (i.e. perform assignments of the form a[i]=x.) The Segment Tree should be able to process both queries in O(logn) time.</p>
  <h2 >Sum queries</h2>    
  
    <img className="abc" src ={ms1}/>

<h2 >Querying the tree :</h2>

    <img className="abc" src ={ms2}/>

<p><b>Build function Analysis :</b> Build a merge sort tree takes O(NlogN) time which is same as Merge Sort Algorithm . It will take O(NlogN) memory because each number Ai will be present in at most LogN vectors (Height of the tree ) .</p>
<p><b>Query function Analysis :</b> A range L to R can divided into at most Log(N) parts, where we will perform binary search on each part . So this gives us complexity of O(LogN * LogN) per query .</p>
<p><b>Handling Point Updates :</b> The only reason that we cant handle updates on MST in this code is because its merge function takes too much time, so even if theres a point update it will lead to O(N). So the major issue is of vectors and rearranging them on updations, but why do we need vectors ? Just to find the elements smaller than K in that complete vector, right ? Lets forget about vectors and keep policy based data structure 175 at each node which handles three queries (insertion , deletion and elements smaller than K in the set) in O(LogN) time . So now no need to rearrange vectors and we can use insertion - deletion to handle point queries . This is just an idea , we can discuss this in comments again if anyone has a doubt .</p>
        </div>
    )
}
export const PersistentSegmentTrees=()=>{
    return(
        <div className='abcdef'>
            <h1>Persistent Segment Tree:</h1>
    <p>A persistent data structure is a data structure that remembers it previous state for each modification. This allows to access any version of this data structure that interest us and execute a query on it.</p>
<p>Segment Tree is a data structure that can be turned into a persistent data structure efficiently (both in time and memory consumption). We want to avoid copying the complete tree before each modification, and we don't want to loose the O(logn) time behavior for answering range queries.</p>
<p>In fact, any change request in the Segment Tree leads to a change in the data of only O(logn) vertices along the path starting from the root. So if we store the Segment Tree using pointers (i.e. a vertex stores pointers to the left and the right child vertices), then when performing the modification query, we simply need to create new vertices instead of changing the available vertices. Vertices that are not affected by the modification query can still be used by pointing the pointers to the old vertices. Thus for a modification query O(logn) new vertices will be created, including a new root vertex of the Segment Tree, and the entire previous version of the tree rooted at the old root vertex will remain unchanged.</p>
<p>Let's give an example implementation for the simplest Segment Tree: when there is only a query asking for sums, and modification queries of single elements.</p>
  
    <img className="abc" src ={st}/>

        </div>
    )
}
export const SegmentTreesPracticeQusetions =()=>{
    return(
        <div className='abcdef'>
            <h1> PRACTICE QUESTIONS :</h1>
    <p>1.)	https://www.hackerearth.com/practice/data-structures/advanced-data-structures/segment-trees/practice-problems/algorithm/tree-queries-4-044903fe/</p>
<p>2.)	 https://www.hackerearth.com/practice/data-structures/advanced-data-structures/segment-trees/practice-problems/algorithm/incremental-queries-a7a71194/</p>
<p>3.)	https://www.hackerearth.com/practice/data-structures/advanced-data-structures/segment-trees/practice-problems/algorithm/cool-gcd-789acd8e/</p>
<p>4.)	https://www.codechef.com/problems/DIVMAC</p>
<p>5.)	https://www.codechef.com/problems/SUBPRNJL</p>
<p>6.)	https://www.codechef.com/problems/PRMQ</p>
<p>7.)	https://www.codechef.com/problems/DRGNDEN</p>
<p>8.)	https://www.codechef.com/problems/URBANDEV</p>
<p>9.)	https://www.codechef.com/problems/BACREP</p>
<p>10.)	https://www.codechef.com/problems/XORMIN</p>

    


        </div>
    );
};
