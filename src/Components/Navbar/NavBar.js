import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ColoredLogo from '../../Tembe Icons/tembe_logo_coloured.png'
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css'

const NavBar = () => {
  const [profileImage, setProfileImage] = useState('')
  const [username, setUsername] = useState('')

  useEffect(() => {
    fetch('')
  })

  return (
    <Navbar bg="light" expand="lg">
      <NavLink className="navbar-brand m-1 p-0 col-5 d-flex justify-content-left" to="/home">
        <img src={ColoredLogo} alt="" className='navbar-logo' />
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-toggler mx-2'>
      <svg className='toggler-image' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
        <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
      </svg>
      </Navbar.Toggle>      <Navbar.Collapse id="basic-navbar-nav">
        <Nav   className="mr-auto  navbar-links text-black">
          <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/medications">Medications</Nav.Link>
          <Nav.Link as={NavLink} to="/doses">Doses</Nav.Link>
          <Nav.Link as={NavLink} to="/">About</Nav.Link>
        </Nav>

        <Nav className='profile-section mr-auto text-blue'>
          <img src="" alt="" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;