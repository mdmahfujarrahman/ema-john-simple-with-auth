import React, { useState } from 'react';
import './SignUP.css'
import Google from "../../img/Google.png";
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from '../../firebase/firebase.init';

const SignUP = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword, user] =
        useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()



    const handleCreateUser = (e) => {
        e.preventDefault();
        setError('')
        if (password !== confirmPassword){
            setError('Password did not match');
            return;
        }
        if(password.length < 6){
            setError('Password must be at least 6 characters')
            return;
        }
        createUserWithEmailAndPassword(email, password);
        

    }
    if(user){
        navigate('/')
    }

    const handleEmailBlur = (e) => {
        setEmail(e.target.value)
        
    }
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
        
    }
    const handleConfirmPasswordBlur = (e) => {
        setConfirmPassword(e.target.value);
        
    }
    
    return (
        <div>
            <div className="form-container">
                <div>
                    <h2 className="form-title">Sign Up</h2>
                    <form onSubmit={handleCreateUser} action="">
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                onBlur={handleEmailBlur}
                                type="email"
                                name="email"
                                id=""
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                onBlur={handlePasswordBlur}
                                type="password"
                                name="password"
                                id=""
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Confirm Password</label>
                            <input
                                onBlur={handleConfirmPasswordBlur}
                                type="password"
                                name="confirm-password"
                                id=""
                                required
                            />
                        </div>
                        <p style={{ color: "red" }}>{error}</p>
                        <input
                            className="form-submit"
                            type="submit"
                            value="Sign Up"
                        />
                    </form>
                    <p>
                        Already have an account?
                        <Link className="form-link" to="/login">
                            Login
                        </Link>
                    </p>
                    <div className="line-container">
                        <div className="line">
                            <hr />
                        </div>
                        <span>or</span>
                        <div className="line">
                            <hr />
                        </div>
                    </div>
                    <button className="google-btn">
                        <img className="google-img" src={Google} alt="" />
                        <span>Continue with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUP;