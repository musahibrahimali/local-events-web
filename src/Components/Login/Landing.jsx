import React, {useCallback, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Footer, SignIn, SignUp} from "../index";
import {authentication, database } from "../../Utils/firebase";
import './styles/Landing.css';

function LogLanding () {
    /* react hooks */
    let browserHistory = useHistory();
    const [logIn, setLogIn] = useState(true);
    const [displayName, setDisplayName] = useState('');
    const [displayNameError, setDisplayNameError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    /* Functions */

    // clear all inputs
    const clearInput = () => {
        setEmail('');
        setPassword('');
        setDisplayName('');
    }

    // clear all errors
    const clearError = () => {
        setEmailError('');
        setPasswordError('');
        setDisplayNameError('');
    }

    // switch login and sign up components
    const handleSwitch = () => {
        clearInput();
        clearError();
        setLogIn(!logIn);
    }

    // handle sign in
    const handleSignIn = useCallback(
        async (event) => {
            event.preventDefault();
            clearError();
            await authentication
                .signInWithEmailAndPassword(email, password)
                .then(

                )
                .catch((error) => {
                    switch (error.code){
                        case "auth/invalid-email":
                            setEmailError("Invalid Email");
                            break;
                        case "auth/user-disabled":
                            setEmailError("Account has been disabled");
                            break;
                        case "auth/user-not-found":
                            setEmailError("User not found");
                            break;
                        case "auth/wrong-password":
                            setPasswordError("Invalid password");
                            break;
                        default:
                            break;
                    }
                });

            // navigate to home page
            browserHistory.push('/');
        },[browserHistory, email, password]
    );

    // handle sign up
    const handleSignUp = useCallback(
        async (event) => {
            event.preventDefault();
            clearError();
            const user = await authentication
                .createUserWithEmailAndPassword(email, password)
                .catch((error) => {
                    switch (error.code){
                        case "auth/invalid-email":
                            setEmailError("Invalid Email");
                            break;
                        case "auth/email-already-in-use":
                            setEmailError("Email in use by another account");
                            break;
                        case "auth/weak-password":
                            setPasswordError("Password must be at least 6 characters");
                            break;
                        default:
                            break;
                    }
                });

            await database.ref(`users/${user.user.uid}`).set({
                userInfo: {
                    email: email,
                    displayName: displayName,
                }
            });

            // navigate to home page
            browserHistory.push('/');
        }, [browserHistory, displayName, email, password]
    );


    return (
        <>
            <div className="App">
                <div className="login">
                    <div className="container">
                        {logIn && (
                            <SignIn
                                email={email}
                                setEmail={setEmail}
                                password={password}
                                setPassword={setPassword}
                                emailError={emailError}
                                setEmailError={setEmailError}
                                passwordError={passwordError}
                                setPasswordError={setPasswordError}
                                handleSignIn={handleSignIn}
                                onClick={handleSwitch}
                            />
                        )}
                        {!logIn && (
                            <SignUp
                                displayName={displayName}
                                setDisplayName={setDisplayName}
                                email={email}
                                setEmail={setEmail}
                                password={password}
                                setPassword={setPassword}
                                emailError={emailError}
                                setEmailError={setEmailError}
                                passwordError={passwordError}
                                setPasswordError={setPasswordError}
                                displayNameError={displayNameError}
                                setDisplayNameError={setDisplayNameError}
                                handleSignUp={handleSignUp}
                                onClick={handleSwitch}
                            />
                        )}
                    </div>
                    <RightSide
                        className={logIn ? "right-side right" : "right-side left"}
                        currentActive={logIn ? "REGISTER" : "LOG IN"}
                        onClick={handleSwitch}
                    />
                </div>
            </div>
            <Footer />
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