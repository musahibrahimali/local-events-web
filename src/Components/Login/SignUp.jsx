import React from 'react';
import {loginImage} from "../../assets/AssetExport";
import './styles/style.css';

function SignUp(props) {

    const {
        displayName,
        setDisplayName,
        email,
        setEmail,
        password,
        setPassword,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        displayNameError,
        setDisplayNameError,
        handleSignUp,
        handleSwitch,
    } = props;

    const handleDisplayNameOnChange = (event) => {
        event.preventDefault();
        setDisplayNameError("");
        setDisplayName(event.target.value.toString().toLowerCase());
    }

    const handleEmailOnChange = (event) => {
        event.preventDefault();
        setEmailError("");
        setEmail(event.target.value.trim());
    }

    const handlePasswordOnChange = (event) => {
        event.preventDefault();
        setPasswordError("");
        setPassword(event.target.value);
    }

    return (
        <div className="base-container">
            <div className="header">
                <h2>REGISTER</h2>
            </div>
            <div className="content">
                <div className="image">
                    <img src={loginImage} alt="This is a graphic"/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            required
                            className
                            type="text"
                            name="username"
                            placeholder="John Doe"
                            value={displayName}
                            onChange={handleDisplayNameOnChange}
                        />
                        <p className="error-message">{displayNameError}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="text"
                            name="email"
                            required
                            placeholder="johndoe@email.com"
                            value={email}
                            onChange={handleEmailOnChange}
                        />
                        <p className="error-message">{emailError}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            value={password}
                            onChange={handlePasswordOnChange}
                            placeholder="password"
                        />
                        <p className="error-message">{passwordError}</p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button onClick={handleSignUp} className="btn-log">
                    Sign Up
                </button>

                <p className="btn-log-reg" onClick={handleSwitch}>
                    Don't have an account ? <span className="register-text">Register</span>
                </p>
            </div>
        </div>
    );
}

export default SignUp;
