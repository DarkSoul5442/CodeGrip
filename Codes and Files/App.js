import './App.css';
import Navbar from './Components/Navbar/Navbar';


import "./Components/yt/styles.css";
import Home from './Components/Home/Home';
import AboutUs from './Components/About/about'
import {  BrowserRouter as Router,  Route,  Switch,  withRouter} from "react-router-dom";
import {NumberTheory,GCD,Modular_Arithmatic, Euler, MillerRabin, Sieve, BinaryExponential} from './Components/Files/NumberTheory';


function App() {
  return (
 
    <Router>
    <div className="App">
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/AboutUs" component={AboutUs}/>
      <Route exact path="/NumberTheory" component={NumberTheory}/>
      
      <Route exact path="/NumberTheory/GCD" component={GCD}/>
      <Route exact path="/NumberTheory/Modular_Arithmatic" component={Modular_Arithmatic}/>
      <Route exact path="/NumberTheory/BinaryExponential" component={BinaryExponential}/>
      <Route exact path="/NumberTheory/Sieve" component={Sieve}/>
      <Route exact path="/NumberTheory/MillerRabin" component={MillerRabin}/>
      <Route exact path="/NumberTheory/Euler" component={Euler}/>
      
      
    </Switch>
    
   
    
    </div>
   
    </Router>

  );
}

export default App;
