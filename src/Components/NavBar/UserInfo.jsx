import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import './styles/UserInfo.css';
import {authentication} from "../../Utils/firebase";
import LoadAnimation from "../LoadAnimation/LoadAnimation";

function UserInfo(){

    let browserHistory = useHistory();
    const [loading, setLoading] = useState(false);

    const handleLogOut = async () => {
        setLoading(true);
       await authentication.signOut();
       browserHistory.push('/');
    }

    return(
        <>
            { loading && <LoadAnimation /> }
            <ul className='user-drop-menu'>
                <li><Link to="/profile-page" className="user-info-link">Profile</Link></li>

                <li><Link to="/my-events" className="user-info-link">My Events</Link></li>

                <li  onClick={handleLogOut}>
                    <Link className="user-info-link">log out</Link>
                </li>
            </ul>
        </>
    );
}

export default UserInfo;
