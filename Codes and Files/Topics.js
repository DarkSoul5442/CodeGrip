import React from 'react'
import { Link } from 'react-router-dom'

function topics() {
    return (


        

        <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Topics</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    
                <Link class="dropdown-item" to="/NumberTheory">Number Theory</Link>
                    <ol  class="nav-item subDropdown" >
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                        
                        <Link class="nav-item subDropdown" to="/NumberTheory/GCD">GCD <br></br></Link>
                        <Link class="nav-item subDropdown" to="/NumberTheory/Modular_Arithmatic">Modular Arithmatic <br></br></Link>
                        <Link class="nav-item subDropdown" to="/NumberTheory/BinaryExponential">Binary Exponential <br></br></Link>
                        <Link class="nav-item subDropdown" to="/NumberTheory/Sieve">Sieve <br></br></Link>
                        <Link class="nav-item subDropdown" to="/NumberTheory/MillerRabin">Miller Rabin <br></br></Link>
                        <Link class="nav-item subDropdown" to="/NumberTheory/Euler">Euler's Totient Functions <br></br></Link>
                        
                        
                    </div>
                    </ol>
                    <a class="dropdown-item" href="#">Trie</a>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                        <a class="nav-item subDropdown" href="#" >Explanation <br></br></a>
                        <a class="nav-item subDropdown" href="#">Practice Questions <br></br></a>
                        
                    </div>
                    </ol>
                    <a class="dropdown-item" href="#">Segment Trees</a>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                        <a class="nav-item subDropdown" href="#" >Explanation <br></br></a>
                        <a class="nav-item subDropdown" href="#">Merge Sort Tree <br></br></a>
                        <a class="nav-item subDropdown" href="#" >Persistent Segment Trees <br></br></a>
                        <a class="nav-item subDropdown" href="#">Practice Questions <br></br></a>
                        
                    </div>
                    </ol>
                    <a class="dropdown-item" href="#">Binary Index Tree</a>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                        <a class="nav-item subDropdown" href="#" >Explanation <br></br></a>
                        <a class="nav-item subDropdown" href="#">Practice Questions <br></br></a>
                        
                    </div>
                    </ol>
                    <a class="dropdown-item" href="#">SQRT Decomposition</a>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                        <a class="nav-item subDropdown" href="#" >Explanation <br></br></a>
                        <a class="nav-item subDropdown" href="#">MO's Algorithm <br></br></a>
                        <a class="nav-item subDropdown" href="#">Practice Questions <br></br></a>
                        
                    </div>
                    </ol>
                    <a class="dropdown-item" href="#">Heavy Light Decomposition</a>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                        <a class="nav-item subDropdown" href="#" >Explanation <br></br></a>
                        <a class="nav-item subDropdown" href="#">Practice Questions <br></br></a>
                        
                    </div>
                    </ol>
                    <a class="dropdown-item" href="#">Suffix Array</a>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                        <a class="nav-item subDropdown" href="#" >Explanation <br></br></a>
                        <a class="nav-item subDropdown" href="#">Practice Questions <br></br></a>
                        
                    </div>
                    </ol>
                    <a class="dropdown-item" href="#">Graph Theory</a>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                        <a class="nav-item subDropdown" href="#" >Explanation <br></br></a>
                        <a class="nav-item subDropdown" href="#">DFS <br></br></a>
                        <a class="nav-item subDropdown" href="#" >BFS <br></br></a>
                        <a class="nav-item subDropdown" href="#">Dijkstra's Algorithm <br></br></a>
                        <a class="nav-item subDropdown" href="#">Minimum Spanning Tree <br></br></a>
                        <a class="nav-item subDropdown" href="#">Disjoint Set Union <br></br></a>
                        <a class="nav-item subDropdown" href="#" >Lowest Common Ancestor <br></br></a>
                        <a class="nav-item subDropdown" href="#">Bridges and Articulation points <br></br></a>
                        <a class="nav-item subDropdown" href="#" >Strongly Connected Components (Torgon's Algorithm) <br></br></a>
                        <a class="nav-item subDropdown" href="#">Minimum and Maximum Flow (Dinic Algorithm) <br></br></a>
                        <a class="nav-item subDropdown" href="#" >Euler Tour/Tree Flatening <br></br></a>
                        <a class="nav-item subDropdown" href="#">Practice Questions <br></br></a>
                        
                    </div>
                    </ol>
                    <a class="dropdown-item" href="#">Dynamic Programming</a>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                        <a class="nav-item subDropdown" href="#" >Explanation <br></br></a>
                        <a class="nav-item subDropdown" href="#">DP on Bit Masking <br></br></a>
                        <a class="nav-item subDropdown" href="#">Sum over subset DP <br></br></a>
                        <a class="nav-item subDropdown" href="#" >DP on trees <br></br></a>
                        <a class="nav-item subDropdown" href="#">Practice Questions <br></br></a>
                        
                    </div>
                    </ol>
                    <a class="dropdown-item" href="#">Binary Search and Predicate Function</a>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                        <a class="nav-item subDropdown" href="#" >Explanation <br></br></a>
                        <a class="nav-item subDropdown" href="#">Practice Questions <br></br></a>
                        
                    </div>
                    </ol>
                    <a class="dropdown-item" href="#">Game Theory</a>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                        <a class="nav-item subDropdown" href="#" >Explanation <br></br></a>
                        <a class="nav-item subDropdown" href="#">Practice Questions <br></br></a>
                        
                    </div>
                    </ol>
                    <a class="dropdown-item" href="#">String Pattern Searching</a>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                        <a class="nav-item subDropdown" href="#" >Rabin-Karp Algorithm <br></br></a>
                        <a class="nav-item subDropdown" href="#" >KMP Algorithm <br></br></a>
                        <a class="nav-item subDropdown" href="#">Practice Questions <br></br></a>
                        
                    </div>
                    </ol>
                    <a class="dropdown-item" href="#">Matrix Exponential</a>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                        <a class="nav-item subDropdown" href="#" >Explanation <br></br></a>
                        <a class="nav-item subDropdown" href="#">Practice Questions <br></br></a>
                        
                    </div>
                    </ol>
                    <a class="dropdown-item" href="#">Fast Fourier Transform</a>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                        <a class="nav-item subDropdown" href="#" >Explanation <br></br></a>
                        <a class="nav-item subDropdown" href="#">Practice Questions <br></br></a>
                        
                    </div>
                    </ol>
                </div>
            </li>

         
    )
}


export default topics
