import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ColoredLogo from '../../Tembe Icons/tembe_logo_coloured.png'
import './NavBar.css'

const Navbar = () => {
  return (
    <nav className="navbar  navbar-expand-lg   ">
    <NavLink className="navbar-brand m-1 p-0 col-5 d-flex justify-content-left" to="/home"><img src={ColoredLogo} alt="" className='navbar-logo' /></NavLink>
    <button className="navbar-toggler mx-5 border-0 " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <svg className='toggler-image' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
        <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
      </svg>
    </button>

    <div className="collapse navbar-collapse col-3 d-flex " id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto navbar-links text-black ">
     
        <li className="nav-item text-center">
          <NavLink className="nav-link" to="/home">Home</NavLink>
        </li>
       
        <li className="nav-item text-center">
          <NavLink className="nav-link" to="/medications">Medications</NavLink>
        </li>
        <li className="nav-item text-center">
          <NavLink className="nav-link" to="/doses">Doses</NavLink>
        </li>
        <li className="nav-item text-center">
          <NavLink className="nav-link" to="/">About</NavLink>
        </li>
      </ul>
    </div>

    <div className='collapse navbar-collapse col-4 d-flex' id="navbarSupportedContent">

    </div>
  </nav>
  );
};

export default Navbar;