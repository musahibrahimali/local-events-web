import React from 'react';
import './styles/style.css';
import {loginImage} from "../../assets/AssetExport";

function SignIn(){
    return (
        <div className="base-container">
            <div className="header">LOG IN</div>
            <div className="content">
                <div className="image">
                    <img src={loginImage} alt="this is a graphic" />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn-log">
                    Sign In
                </button>
            </div>
        </div>
    );
}

export default SignIn;
