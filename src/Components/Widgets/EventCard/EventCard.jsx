import React from 'react';
import './EventCard.css';

function EventCard(props){

    const {
        imgSrc,
        eventTitle,
        eventDescription,
        eventDate,
    } = props;

    return(
        <div className="card-container">
            <div className="img-container">
                <img className="event-image" src={imgSrc} alt="random graphics"/>
            </div>
            <div className="card-info-container">
                <h2 className="card-info-title">{eventTitle}</h2>
                <p className="card-info-description">{eventDescription}</p>
                <p className="card-info-date">{eventDate}</p>
            </div>
        </div>
    );
}

export default EventCard;
