import React from 'react'
import { Link } from 'react-router-dom'

function topics() {
    return (


        

        <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Topics</Link>
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
                    <Link class="dropdown-item" to="/Trie">Trie</Link>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                        
                        <Link class="nav-item subDropdown" to="/Trie/TriePracticeQuestions">Practice Questions <br></br></Link>
                        
                    </div>
                    </ol>
                    <Link class="dropdown-item" to="/SegmentTrees">Segment Trees</Link>
              
                   <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                        
                        <Link class="nav-item subDropdown" to="/SegmentTrees/MergeSoertTrees">Merge Sort Tree <br></br></Link>
                        <Link class="nav-item subDropdown" to="/SegmentTrees/PersistentSegmentTrees" >Persistent Segment Trees <br></br></Link>
                        <Link class="nav-item subDropdown" to="/SegmentTrees/SegmentTreesPracticeQusetions">Practice Questions <br></br></Link>
                        
                    </div>
                    </ol>
                    <Link class="dropdown-item" to="/BinaryIndexTrees">Binary Index Tree</Link>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
    
                        <Link class="nav-item subDropdown" to="/BinaryIndexTrees/BinaryIndexTreesPracticeQusetions">Practice Questions <br></br></Link>
                        
                    </div>
                    </ol>
                    <Link class="dropdown-item" to="/SQRT_Decomposition">SQRT Decomposition</Link>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                        
                        <Link class="nav-item subDropdown" to="/SQRT_Decomposition/MOsAlgorithm">MO's Algorithm <br></br></Link>
                        <Link class="nav-item subDropdown" to="/SQRT_Decomposition/SQRT_DecompositionPracticeQusetions">Practice Questions <br></br></Link>
                        
                    </div>
                    </ol>
                    <Link class="dropdown-item" to="/HeavyLight_Decomposition">Heavy Light Decomposition</Link>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                        
                        <Link class="nav-item subDropdown" to="/HeavyLight_Decomposition/Heavylight_DecompositionPracticeQusetions">Practice Questions <br></br></Link>
                        
                    </div>
                    </ol>
                    <Link class="dropdown-item" to="/SuffixArray">Suffix Array</Link>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                    
                        <Link class="nav-item subDropdown" to="/SuffixArray/SuffixArrayPracticeQusetions">Practice Questions <br></br></Link>
                        
                    </div>
                    </ol>
                    <Link class="dropdown-item" to="/GraphTheory">Graph Theory</Link>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                     
                        <Link class="nav-item subDropdown" to="/GraphTheory/Dfs">DFS <br></br></Link>
                        <Link class="nav-item subDropdown" to="/GraphTheory/Bfs" >BFS <br></br></Link>
                        <Link class="nav-item subDropdown" to="/GraphTheory/Dijkstra">Dijkstra's Algorithm <br></br></Link>
                        <Link class="nav-item subDropdown" to="/GraphTheory/MinSpan">Minimum Spanning Tree <br></br></Link>
                        <Link class="nav-item subDropdown" to="/GraphTheory/DisSet">Disjoint Set Union <br></br></Link>
                        <Link class="nav-item subDropdown" to="/GraphTheory/Lca" >Lowest Common Ancestor <br></br></Link>
                        <Link class="nav-item subDropdown" to="/GraphTheory/Baa">Bridges and Articulation points <br></br></Link>
                        <Link class="nav-item subDropdown" to="/GraphTheory/StrongConnected" >Strongly Connected Components (Torgon's Algorithm) <br></br></Link>
                        <Link class="nav-item subDropdown" to="/GraphTheory/Min_and_maxflow">Minimum and Maximum Flow (Dinic Algorithm) <br></br></Link>
                        <Link class="nav-item subDropdown" to="/GraphTheory/Eulertour" >Euler Tour/Tree Flatening <br></br></Link>
                        <Link class="nav-item subDropdown" to="/GraphTheory/GraphTheoryPracticeQusetions">Practice Questions <br></br></Link>
                        
                    </div>
                    </ol>
                    <Link class="dropdown-item" to="#">Dynamic Programming</Link>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                        <Link class="nav-item subDropdown" to="#" >Explanation <br></br></Link>
                        <Link class="nav-item subDropdown" to="#">DP on Bit Masking <br></br></Link>
                        <Link class="nav-item subDropdown" to="#">Sum over subset DP <br></br></Link>
                        <Link class="nav-item subDropdown" to="#" >DP on trees <br></br></Link>
                        <Link class="nav-item subDropdown" to="#">Practice Questions <br></br></Link>
                        
                    </div>
                    </ol>
                    <Link class="dropdown-item" to="#">Binary Search and Predicate Function</Link>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                        <Link class="nav-item subDropdown" to="#" >Explanation <br></br></Link>
                        <Link class="nav-item subDropdown" to="#">Practice Questions <br></br></Link>
                        
                    </div>
                    </ol>
                    <Link class="dropdown-item" to="#">Game Theory</Link>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                        <Link class="nav-item subDropdown" to="#" >Explanation <br></br></Link>
                        <Link class="nav-item subDropdown" to="#">Practice Questions <br></br></Link>
                        
                    </div>
                    </ol>
                    <Link class="dropdown-item" to="#">String Pattern Searching</Link>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                        <Link class="nav-item subDropdown" to="#" >Rabin-Karp Algorithm <br></br></Link>
                        <Link class="nav-item subDropdown" to="#" >KMP Algorithm <br></br></Link>
                        <Link class="nav-item subDropdown" to="#">Practice Questions <br></br></Link>
                        
                    </div>
                    </ol>
                    <Link class="dropdown-item" to="#">Matrix Exponential</Link>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                        <Link class="nav-item subDropdown" to="#" >Explanation <br></br></Link>
                        <Link class="nav-item subDropdown" to="#">Practice Questions <br></br></Link>
                        
                    </div>
                    </ol>
                    <Link class="dropdown-item" to="#">Fast Fourier Transform</Link>
                    <ol  class="nav-item subDropdown">
                        <div class="nav-menu subDropdown" style={{backgroundColor:"hex"}}>
                        <Link class="nav-item subDropdown" to="#" >Explanation <br></br></Link>
                        <Link class="nav-item subDropdown" to="#">Practice Questions <br></br></Link>
                        
                    </div>
                    </ol>
                </div>
            </li>

         
    )
}


export default topics
