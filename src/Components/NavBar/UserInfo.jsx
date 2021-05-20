import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {UserInfoItem} from "./UserInfoItem";
import './styles/UserInfo.css';

function UserInfo(){

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return(
        <>
            <ul
                onClick={handleClick}
                className={click ? 'user-drop-menu clicked-one' : 'user-drop-menu'}
            >
                {UserInfoItem.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link
                                className={item.cName}
                                to={item.path}
                                onClick={() => setClick(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default UserInfo;
