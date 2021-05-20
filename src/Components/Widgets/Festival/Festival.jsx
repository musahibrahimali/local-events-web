import React from 'react';
import './Festival.css';
import {EventCard} from "../WidgetExport";
import {Image1, Image3, Image4, Image5, Image6} from "../../../assets/AssetExport";

function Festival() {
    return (
        <div className="festival-events-container">
            <EventCard
                imgSrc={Image3}
                eventTitle="Festival Celebration"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />

            <EventCard
                imgSrc={Image4}
                eventTitle="Festival Celebration"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />

            <EventCard
                imgSrc={Image5}
                eventTitle="Festival Celebration"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />

            <EventCard
                imgSrc={Image6}
                eventTitle="Festival Celebration"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />

            <EventCard
                imgSrc={Image1}
                eventTitle="Festival Celebration"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />
        </div>
    )
}

export default Festival;
