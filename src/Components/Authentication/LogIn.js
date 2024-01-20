import React, { useState, useEffect } from "react";
import './Login.css'
import whiteLogo from '../../Tembe Icons/tembe_logo_white.png'
import { useNavigate } from "react-router-dom";

const LogIn = ({ setUser}) => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)
        fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        })

        .then((r) => {
            console.log(r)
            setIsLoading(false);
            if (r.ok) {
                console.log(r)
                return r.json();
            }
            else {
                throw new Error("Login failed!");
            }
        })

        .then((data) => {
            const {user, sessionId} = data;
            setUser(user);
            document.cookie = `session_id=${sessionId}; path=/`
            navigate('/home')
        })
        .catch((error) => {
            console.log("Error:", error);
        });
    }

    return (
        <div className="page-background">
            <div className="blue-section d-flex align-items-center ">
                <img src={whiteLogo} className='auth-logo ' alt="tembe-logo" />
                <div className="white-section">
                    <form>
                    <h2 className="header text-center mt-4">Welcome back to Tembe</h2>
                    <label htmlFor="">Email</label>
                    <br />
                    <input 
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <label htmlFor="">Password</label>
                    <br />
                    <input 
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    />             
                    <br />
                    <button 
                    className="log-in-button"
                    type="submit"
                    onClick={handleSubmit}
                    >
                        Log In <span className="arrow">&rarr;</span>
                    </button>
                    </form>
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

export default LogIn;