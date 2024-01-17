import React, { useState, useEffect } from "react";
import './Login.css'
import whiteLogo from '../../Tembe Icons/tembe_logo_white.png'

const LogIn = () => {
    return (
        <div className="page-background">
            <div className="blue-section d-flex align-items-center ">
                <img src={whiteLogo} className='auth-logo ' alt="tembe-logo" />
                <div className="white-section">
                    <h2 className="header text-center mt-4">Welcome back to Tembe</h2>
                    <label htmlFor="">Email</label>
                    <br />
                    <input type="text" />
                    <br />
                    <label htmlFor="">Password</label>
                    <br />
                    <input type="password" />
                    <br />
                    <label htmlFor="">Confirm Password</label>
                    <br />
                    <input type="password" />
                    <br />
                    <button className="sign-up-button">
                        Sign Up <span className="arrow">&rarr;</span>
                    </button>
                    <hr className="page-divider" />
                </div>
            </div>
        </div>
    );
};

export default LogIn;