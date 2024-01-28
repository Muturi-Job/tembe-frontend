import React, { useState, useEffect } from "react";
import './SignUp.css'
import whiteLogo from '../../Tembe Icons/tembe_logo_white.png'
import { useNavigate, NavLink } from "react-router-dom"

const SignUp = ({ setUser }) => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [existingEmail, setExistingEmail] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword)
    };

    const validateForm = () => {
        let valid = true;
        const errors = {
            email: '',
            password: '',
            passwordConfirm: '',
        };

        if (!email.trim()) {
            valid = false;
            errors.email = 'Email is required';
        }

        if (!password.trim()) {
            valid = false;
            errors.password = 'Password is required';
        } else if (password.length < 6) {
            valid = false;
            errors.password = 'Password must be at least 6 characters';
        }

        if (!passwordConfirm.trim()) {
            valid = false;
            errors.passwordConfirm = 'Confirm Password is required';
        } else if (password !== passwordConfirm) {
            valid = false;
            errors.passwordConfirm = 'Passwords do not match';
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

        // Update state based on input changes
        if (name === 'email') setEmail(value);
        else if (name === 'password') setPassword(value);
        else if (name === 'passwordConfirm') setPasswordConfirm(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (validateForm()) {
                fetch('http://localhost:4000/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                })
                .then((r) => {
                    setIsLoading(false);

                    if (r.ok) {
                        return r.json();
                    } else if (r.status === 409) {
                        setExistingEmail(true);
                    } else {
                        throw new Error('Sign Up Failed!')
                    }
                })
                .then((data) => {
                    const { user, token } = data;
                    localStorage.setItem('authToken', token)
                    setUser(user);
                    navigate('/profile')
                })
                .catch((error) => {
                    console.log("Error:", error)
                });
            } 
    };


    useEffect(() => {
        const timeout = setTimeout(() => {
            setExistingEmail(false);
        }, 4000);

        return () => clearTimeout(timeout);
    }, [existingEmail]);

    return (
        <div className="page-background">
            <div className="blue-section d-flex align-items-center ">
                <img src={whiteLogo} className='auth-logo ' alt="tembe-logo" />
                <div className="white-section">
                    <h2 className="header text-center mt-4">Create your account</h2>
                    <form>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input
                            type="email"
                            name="email"
                            onChange={handleInputChange}
                            className={formErrors.email ? 'error' : ''}
                        />
                        {formErrors.email && <p className="error-message">{formErrors.email}</p>}
                        <br />
                        <label htmlFor="password">Password</label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            placeholder="At least 6 characters"
                            onChange={handleInputChange}
                            className={formErrors.password ? 'error' : ''}
                        />
                        {formErrors.password && <p className="error-message">{formErrors.password}</p>}
                        <br />
                        <label htmlFor="passwordConfirm">Confirm Password</label>
                        <br />
                        <input
                            type="password"
                            name="passwordConfirm"
                            placeholder="At least 6 characters"
                            onChange={handleInputChange}
                            className={formErrors.passwordConfirm ? 'error' : ''}
                        />
                        {formErrors.passwordConfirm && <p className="error-message">{formErrors.passwordConfirm}</p>}
                        <br />
                     
                        {existingEmail && (
                            <p className="email-in-use-error">Email already in use</p>
                        )}
                        <br />
                        <button
                            className="sign-up-button"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Sign Up <span className="arrow">&rarr;</span>
                        </button>
                    </form>
                    <div className="page-divider">
                        <hr className="left-divider" />
                        <span className="or-text">
                            or
                        </span>
                        <hr className="right-divider " />
                    </div>
                    <div className="alt-login">
                        <p>Already have an account, <span className="log-in span" onClick={(() => navigate('/login'))}><NavLink>Log in</NavLink></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;  
