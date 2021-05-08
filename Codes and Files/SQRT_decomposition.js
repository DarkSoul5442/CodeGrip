import React from 'react'
import sqrt from './Screenshot (56).png'
import mo from './Screenshot (59).png'
export const SQRT_Decomposition=()=>{
    return(
        <div className='abcdef'>
           <h1 className="headss">SQRT DECOMPOSITION </h1>
 <p>Sqrt Decomposition is a method (or a data structure) that allows you to perform some common operations (finding sum of the elements of the sub-array, finding the minimal/maximal element, etc.) in <b>O(√n</b>) operations, which is much faster than <b>O(n)</b> for the trivial algorithm.</p>
 <p>First we describe the data structure for one of the simplest applications of this idea, then show how to generalize it to solve some other problems, and finally look at a slightly different use of this idea: splitting the input requests into sqrt blocks.</p>
 <p>Square root decomposition is extremely versatile. Some of its most well-known use cases are:</p>
 <ul>
     <li>answering queries on a static array, with methods such as Mo's algorithm or block precomputation</li>
     <li>"lazy" brute force modifications, where it is easy to query an entire block, but tag pushing isn't obvious</li>
     <li>•	separating objects based on a threshold, when there exists both an <b>O(x)</b> algorithm and an <b>O(n/x)</b> algorithm.</li>
 </ul>
 <h2 className="heads2">IMPLEMENTATION : </h2>
   <div>
    <img className="abc" src ={sqrt}/>
</div>  
<h2 className="heads2" >VIDEO EXPLANATION :</h2>
<iframe className="embedd" width="560" height="315" src="https://www.youtube.com/embed/gWbDocYhwDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
export const MOsAlgorithm =()=>{
    return(
        <div className='abcdef'>
           <h1 className="headss">MO’s ALGORITHM :  </h1>
 <p>Mo’s algorithm can be used in many problems that require processing range queries in a static array, i.e., the array values do not change between the queries. In each query, we are given a range [a,b], and we should calculate a value based on the array elements between positions a and b. Since the array is static, the queries can be processed in any order, and Mo’s algorithm processes the queries in a special order which guarantees that the algorithm works efficiently. Mo’s algorithm maintains an active range of the array, and the answer to a query concerning the active range is known at each moment. The algorithm processes the queries one by one, and always moves the endpoints of the active range by inserting and removing elements. The time complexity of the algorithm is O(n p n f (n)) where the array contains n elements, there are n queries and each insertion and removal of an element takes O(f (n)) time. The trick in Mo’s algorithm is the order in which the queries are processed: The array is divided into blocks of k = O( p n) elements, and a query [a1,b1] is processed before a query [a2,b2] if either</p>
 <ul>
     <li> ba1/kc &gt; ba2/kc or</li>
     <li> ba1/kc = ba2/kc and b1 &gt; b2.</li>
 </ul>
 <p>Thus, all queries whose left endpoints are in a certain block are processed one after another sorted according to their right endpoints. Using this order, the algorithm only performs O(n p n) operations, because the left endpoint moves O(n) times O( p n) steps, and the right endpoint moves O( p n) times O(n) steps. Thus, both endpoints move a total of O(n p n) steps during the algorithm.</p>
 <h2 className="heads2">IMPLEMENTATION : </h2>
   
    <img className="abc" src ={mo} />
 
<h2 className="heads2">VIDEO EXPLANATION :</h2>
<iframe className="embedd" width="560" height="315" src="https://www.youtube.com/embed/gUpfwVRXhNY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
};
export const SQRT_DecompositionPracticeQusetions =()=>{
    return(
        <div className='abcdef'>
            <h1 >PRACTICE PROBLEMS :</h1>
<p>1.)	https://codeforces.com/contest/220/problem/B</p>
<p>2.)	https://codeforces.com/contest/86/problem/D</p>
<p>3.)	https://codeforces.com/contest/13/problem/E</p>
<p>4.)	https://codeforces.com/contest/455/problem/D</p>
<p>5.)	https://codeforces.com/contest/375/problem/D</p>
<p>6.)	https://codeforces.com/contest/446/problem/C</p>
<p>7.)	https://codeforces.com/contest/487/problem/D</p>
<p>8.)	https://codeforces.com/contest/506/problem/D</p>
<p>9.)	https://codeforces.com/contest/348/problem/C</p>
<p>10.)	https://codeforces.com/contest/617/problem/E</p>
<p>11.)	https://codeforces.com/contest/444/problem/C</p>
<p>12.)	https://codeforces.com/contest/398/problem/D</p>
<p>13.)	https://codeforces.com/contest/342/problem/E</p>
        </div>
    )
}
