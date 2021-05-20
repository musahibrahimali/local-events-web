import React from 'react';
import './Education.css';
import {EventCard} from "../WidgetExport";
import {Image1, Image3, Image4, Image5, Image6} from "../../../assets/AssetExport";

function Education() {
    return (
        <div className="education-events-container">

            <EventCard
                imgSrc={Image3}
                eventTitle="Music Festival"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />

            <EventCard
                imgSrc={Image4}
                eventTitle="Music Festival"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />

            <EventCard
                imgSrc={Image5}
                eventTitle="Music Festival"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />

            <EventCard
                imgSrc={Image6}
                eventTitle="Music Festival"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />

            <EventCard
                imgSrc={Image1}
                eventTitle="Music Festival"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />

        </div>
    )
}

export default Education;
