import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {Button, Dropdown, MenuItems, SearchBar} from '../index';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FiberSmartRecordIcon from '@material-ui/icons/FiberSmartRecord';
import {IconButton} from "@material-ui/core";
import {UserContext} from "../../Provider/UserProvider";
import './styles/Navbar.css';
import UserInfo from "./UserInfo";


function Navbar() {
    const user = useContext(UserContext);
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [userDropdown, setUserDropdown] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const styles = {
        largeIcon: {
            width: 120,
            height: 120,
        },

        mediumIcon: {
            width: 60,
            height: 60,
        },

    };

    const handleUserIconClick = () => {

    }

    const onUserMouseEnter = () => {
        if (window.innerWidth < 960) {
            setUserDropdown(false);
        } else {
            setUserDropdown(true);
        }
    };

    const onUserMouseLeave = () => {
        if (window.innerWidth < 960) {
            setUserDropdown(false);
        } else {
            setUserDropdown(false);
        }
    };


    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };


    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
            <div>
                <nav className='navbar'>
                    <div>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            Smart Events <FiberSmartRecordIcon className="logo-icon" />
                        </Link>
                    </div>
                    <SearchBar />
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        {
                            MenuItems.map((item, index) => {
                                if (item.title.toLowerCase() === 'host event') {
                                    return (
                                        <li className='nav-item' key={index} onMouseEnter={onMouseEnter}
                                            onMouseLeave={onMouseLeave}>
                                            <Link className={item.cName} to={item.url}
                                                  onClick={closeMobileMenu}>{item.title} <i
                                                className='fas fa-caret-down'/> </Link>
                                            {dropdown && <Dropdown/>}
                                        </li>
                                    );
                                }

                                else if (item.cName.toLowerCase() === 'nav-links-mobile') {
                                    return (
                                        <li className='nav-item' key={index} >
                                            <Link
                                                className={item.cName}
                                                to={user ? "/profile" : item.url}
                                                onClick={closeMobileMenu}
                                            >
                                                {user ? "Profile" : item.title}
                                                <i className='fas fa-caret-down'/>
                                            </Link>
                                        </li>
                                    );
                                }

                                else {
                                    return (
                                        <li className='nav-item' key={index}>
                                            <Link className={item.cName} to={item.url}
                                                  onClick={closeMobileMenu}>{item.title}</Link>
                                        </li>
                                    );
                                }
                            })
                        }
                    </ul>
                    <div className="sign-user">
                        {
                            user ?
                                <div className="user-icon-container">
                                    <div
                                        className="nav-item"
                                        onMouseEnter={onUserMouseEnter}
                                        onMouseLeave={onUserMouseLeave}
                                    >
                                        <AccountCircleIcon
                                            className="user-icon"
                                            onClick={handleUserIconClick}
                                        />
                                        {userDropdown && <UserInfo/>}
                                    </div>
                                </div>
                                :
                                <Link to="/sign-in" className="sign-in-btn">
                                    <Button>Sign In</Button>
                                </Link>
                        }
                    </div>

                </nav>
            </div>
        </>
    );
}

export default Navbar;
