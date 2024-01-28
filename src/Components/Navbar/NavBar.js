import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ColoredLogo from '../../Tembe Icons/tembe_logo_coloured.png'
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css'
import { UserContext } from '../../App';

const NavBar = () => {
  const {user, setUser} = useContext(UserContext)
  const [profileImage, setProfileImage] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (user){
    console.log(user)
    setProfileImage(user.profile_image_url);
    setUsername(`${user.first_name} ${user.last_name}`)
    }
  }, [user])

  



  return (
    <Navbar bg="light" className='d-flex' expand="lg">
      
      <NavLink className="navbar-brand m-1 p-0 col-4 d-flex " to="/home">
        <img src={ColoredLogo} alt="" className='navbar-logo' />
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-toggler mx-2'>
        <svg className='toggler-image' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
          <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
        </svg>
      </Navbar.Toggle>      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto  navbar-links col-6 d-flex justify-content-center">
          <Nav.Link as={NavLink} className="custom-link" to="/home">Home</Nav.Link>
          <Nav.Link as={NavLink} className="custom-link" to="/medications">Medications</Nav.Link>
          <Nav.Link as={NavLink} className="custom-link" to="/doses">Doses</Nav.Link>
          <Nav.Link as={NavLink} className="custom-link" to="/">About</Nav.Link>
        </Nav>
        {user && (  <Nav className='profile-section d-flex '>
          <img src={profileImage} className='profile-image' alt="" />
          <p className="username-tag ">{username}</p>
        </Nav>)}
        {!user && (
          <div className="auth-buttons">
          <button><Nav.Link as={NavLink} to='/login'>Log in</Nav.Link></button>
          <button><Nav.Link as={NavLink} to='/signup'>Sign up</Nav.Link></button>
          </div>
        )}
      
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;