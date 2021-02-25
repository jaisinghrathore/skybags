import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from "./Images/logo.png"
export default function Nav() {
    return (
        <>
           <nav className="navbar navbar-expand-md navbar-dark" style={{backgroundColor:'rgb(226, 109, 109)'}}>
  <NavLink className="navbar-brand" to="/"><img style={{width:"160px"}} src={logo}></img></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item">
        <NavLink exact activeClassName="active"  className="nav-link mr-4" to="/">HOME</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact activeClassName="active"  className="nav-link mr-4" to="/about">ABOUT US</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact activeClassName="active"  className="nav-link mr-4" to="/products">PRODUCTS</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact activeClassName="active"  className="nav-link mr-4" to="/contact">CONTACT US</NavLink>
      </li>    
    </ul>
  </div>  
</nav> 


        </>
    )
}
