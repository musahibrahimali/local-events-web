import React from 'react';
import './styles/style.css';
import {loginImage} from "../../assets/AssetExport";

function SignUp(){
    return (
        <div className="base-container">
            <div className="header">REGISTER</div>
            <div className="content">
                <div className="image">
                    <img src={loginImage} alt="This is a graphic" />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn-log">
                    Sign Up
                </button>
            </div>
        </div>
    );
}

export default SignUp;
