import React, { useState, useEffect } from "react";
import './SignUp.css'
import whiteLogo from '../../Tembe Icons/tembe_logo_white.png'


const SignUp = () => {
    return(
        <div className="page-background">
        <div className="blue-section d-flex align-items-center ">
            <img src={whiteLogo} className='auth-logo ' alt="tembe-logo" />
            <div className="white-section">
                <h2 className="header text-center mt-4">Create your account</h2>
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
               <div className="page-divider">
                <hr className="left-divider"/>
                <span className="or-text">
                    or
                </span>
                <hr className="right-divider "/>
               </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;