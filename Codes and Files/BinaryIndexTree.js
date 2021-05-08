import React from 'react'
import prt from './Screenshot (52).png'
export const BinaryIndexTrees=()=>{
    return(
        <div className='abcdef'>
             <h1 className="headss"> BINARY INDEX TREE :</h1>
  <p>We often need some sort of data structure to make our algorithms faster. In this article we will discuss about the <b>Binary Indexed Trees</b> structure, proposed by Peter M. Fenwick. This structure was first used for data compression, Peter M. Fenwick. In algorithmic contests it is often used for storing frequencies and manipulating cumulative frequency tables. We begin by motivating the use of this structure by an example.</p>
<p>Consider the following problem: There are n boxes that undergo the following queries:</p>
<p>     1.add marble to box i</p>
<p>     2.sum marbles from box k to box l</p>
<p>Our goal is to implement those two queries.</p>
<p>The naive solution has time complexity of O(1) for query 1 and O(n) for query 2. Suppose we make m queries. The worst case (when all the queries are 2) has time complexity O(n * m). Using some data structure (i.e. RMQ) we can solve this problem with the worst case time complexity of O(m log n). Another approach is to use the Binary Indexed Tree data structure, also with the worst time complexity O(m log n) — but Binary Indexed Trees are easier to code and require less memory space than RMQ.</p>
<h2 className="heads2">BINARY INDEX TREE TEMPLATE :</h2>
  
    <img className="abc"src ={prt}/>

        </div>
    )
}
export const BinaryIndexTreesPracticeQusetions =()=>{
    return(
        <div className='abcdef'>
            <h1 >PRACTICE QUESTION :</h1>
<p>1.)	https://www.codechef.com/problems/LAZER</p>
<p>2.)	https://www.codechef.com/problems/SEACO</p>
<p>3.)	https://www.codechef.com/problems/BACREP</p>
<p>4.)	https://www.codechef.com/problems/ANDSQR</p>
<p>5.)	https://www.codechef.com/problems/DISTNUM</p>
<p>6.)	https://www.codechef.com/problems/LFEB14A</p>
<p>7.)	https://codeforces.com/problemset/problem/1519/E</p>
<p>8.)	https://codeforces.com/problemset/problem/1495/F</p>
<p>9.)	https://codeforces.com/problemset/problem/1499/F</p>
<p>10.)	https://codeforces.com/problemset/problem/1491/E</p>


        </div>
    );
};
