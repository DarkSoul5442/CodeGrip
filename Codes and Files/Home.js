import React from "react"
import YoutubeEmbed from "../yt/YoutubeEmbed"
import "../yt/styles.css"
import codeforces from './1200px-Codeforces_logo.svg.png'
import codechef from './codechef.png'
import spoj from './spoj.png'
import hacker from './hackerrank_logo.png'
import earth from './logo_new.png'
import { Link} from "react-router-dom";
const Home=()=>{
    return(
        
             <div className="App">
    
    <YoutubeEmbed embedId="8X_vXW49Dxw" />
    
    <div>
      <h3 align="right">About Competitive Programming</h3>
      
      <h4 
         align="right">Well-defined problems -
      </h4>
     <h6 class="test" align="right">
     You are presented with one or more problems. The problem statement contains 
     </h6>
     <h6 class="test" align="right">
     variables, and you have to be able to answer the problem if given any possible,
     </h6>
     <h6 class="test" align="right">
      combination of values of the variables. The problem will be well-defined : you ,
     </h6>
     <h6 class="test" align="right">
     will be informed the exact constraints of all variables,any assumption required.
     </h6>
      <h4 class="abc" align="right">Computer Programs -</h4>
      <h6 class="abcd" align="right">You write computer programs that solve the problems.Note that the "computer </h6>
      <h6 class="abcd" align="right">program" here is a very simple command-line program no fancy GUI / webapp</h6>
      <h6 class="abcd" align="right">The command-line program reads the values of the variables from the standard</h6>
      <h6 class="abcd" align="right">input, and must write the answer to the standard output.</h6>
      <h2 class="main" align="right">Practice Websites -</h2>
      <a href="codeforces.com">
      <img className="codeforces" src={codeforces}/>
      </a>
      <Link to="https://codeforces.com">
      <img className="codechef" src={codechef} alt="" />
      </Link>
      <img className="spoj" src={spoj} alt=""/>
      <img className="hacker" src={hacker} alt=""/>
      <img className="earth" src={earth} alt=""/>
    </div>
    
  </div>
       
    )
}
export default Home;
