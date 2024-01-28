import React, { useState, useEffect } from "react";
import './Login.css'
import whiteLogo from '../../Tembe Icons/tembe_logo_white.png'
import { useNavigate , NavLink} from "react-router-dom";

const LogIn = ({ setUser}) => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [unauthorized, setUnauthorized] = useState(false);
    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword)
    }

    const validateForm = () => {
        let valid = true;
        const errors = {
            email: '',
            password: '',
        };

        if (!email.trim()) {
            valid = false;
            errors.email = "Email is required"
        }

        if (!password.trim()) {
            valid = false;
            errors.password = "Password is required"
        }

        setFormErrors(errors);
        return valid;
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));

        if (name === 'email') setEmail(value);
        else if (name === 'password') setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)

        if(validateForm()){
        fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        })

        .then((r) => {
            setIsLoading(false);
            if (r.ok) {
                return r.json();
            }
            else if (r.status === 401) {
                setUnauthorized(true)
            }
            else {
                throw new Error("Login failed!");
            }
        })

        .then((data) => {
            const {user, token} = data;
            localStorage.setItem('authToken', token)
            setUser(user)
            navigate('/home')
        })
        .catch((error) => {
            console.log("Error:", error);
        });
    }
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
                    onChange={handleInputChange}
                    className={formErrors.email ? 'error' : ''}
                    />
                    {formErrors.email && <p className="error-message">{formErrors.email}</p>}

                    <br />
                    <label htmlFor="">Password</label>
                    <br />
                    <input 
                    type="password"
                    name="password"
                    onChange={handleInputChange}
                    className={formErrors.password ? 'error': ''}
                    />             
                    {formErrors.email && <p className="error-message">{formErrors.password}</p>}
                    <br />
                    {unauthorized && (
                        <p className="error-message">Email and Password do not match</p>
                    )}
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
                    <br />
                    <hr className="right-divider "/>
                   </div>
                   <div className="alt-login">
                        <p>Don't have an account, <span className="log-in span" onClick={(() => navigate('/signup'))}><NavLink>Sign up</NavLink></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;