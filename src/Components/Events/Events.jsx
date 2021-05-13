import React from 'react';
import './Events.css';
import { Link } from 'react-router-dom';
import './Events.css';
import { SearchBar } from '../index';
import EventItems from './EventItem';

function Events() {
    return (
        <>
            <div className="events-wrapper">
                <SearchBar />
                <div className="events-component">
                    <nav className="">
                        <ul className="event-menu">
                            {
                                EventItems.map((item, index) => {
                                    return (
                                        <li className="event-item" key={index}>
                                            <Link to={item.url} className={item.cName}>{item.title}</Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Events;
