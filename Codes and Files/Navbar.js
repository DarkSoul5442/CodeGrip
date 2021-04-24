import React from 'react'
import im from './logo.png'
import './Navbar.css';
import Topic from './topics'
import Userprofile from './userprofile';
import profile from './userprofile'
import { Link, NavLink } from "react-router-dom";


function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link class="navbar-brand" to='/'><img src={im} alt="" /> Code Hound  </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup" aria-haspopup="true" aria-expanded="false">
    
                    <ul className="navbar-nav">
                    
                        <Topic />
                        <Link class="nav-item nav-link active" to= '/about'>About us</Link>
                    </ul>
                    <div class="navbar-nav ml-auto" >

                        <form action="">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        </form>
                           
                                <Userprofile />
        
                    </div>

                    </div>



            </nav>


                </div>
    )
}

export default Navbar
