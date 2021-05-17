import React, { useState } from 'react';
import './styles/Landing.css';
import {SignIn, SignUp} from "../index";

function LogLanding () {
    let [logIn, setLogIn] = useState(true);

    const handleSwitch = () => setLogIn(!logIn);

    return (
        <>
            <div className="App">
                <div className="login">
                    <div className="container">
                        {logIn && (
                            <SignIn onClick={handleSwitch}/>
                        )}
                        {!logIn && (
                            <SignUp  onClick={handleSwitch} />
                        )}
                    </div>
                    <RightSide
                        className={logIn ? "right-side right" : "right-side left"}
                        currentActive={logIn ? "REGISTER" : "LOG IN"}
                        onClick={handleSwitch}
                    />
                </div>
            </div>
        </>
    );
}

const RightSide = (props) => {
    return (
        <div
            className={props.className}
            onClick={props.onClick}
        >
            <div className="inner-container">
                <div className="text">{props.currentActive}</div>
            </div>
        </div>
    );
};

export default LogLanding;