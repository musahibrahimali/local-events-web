import { React } from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../index';
import EventItems from './EventItem';
import './Events.css';

function Events() {
    return (
        <>
            <div className="events-wrapper">
                <div className="events-component">
                    <SearchBar />
                    <nav className="navigation">
                        <ul className="event-menu">
                            {
                                EventItems.map((item, index) => {
                                    return (
                                        <li className="event-item" key={index}>
                                            <Link className={item.cName}>{item.title}</Link>
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
