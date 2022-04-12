import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import Google from "../../img/Google.png";
import {
    useAuthState,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || './'

    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
    };

    const handleUserSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
        
    };
    if (user) {
        navigate(from, {replace: true});
    }
    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Login</h2>
                <form onSubmit={handleUserSignIn}>
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
                    <p style={{ color: "red" }}> {error?.message} </p>
                    {loading && <p>Initialising User...</p>}
                    <input
                        className="form-submit"
                        type="submit"
                        value="Login"
                    />
                </form>
                <p>
                    New to Ema-john?
                    <Link className="form-link" to="/signup">
                        Create New Account
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
    );
};

export default Login;
