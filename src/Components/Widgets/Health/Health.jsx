import React from 'react';
import './Health.css';
import {EventCard} from "../WidgetExport";
import {Image1, Image3, Image4, Image5, Image6} from "../../../assets/AssetExport";

function Health() {
    return (
        <div className="health-events-container">
            <EventCard
                imgSrc={Image3}
                eventTitle="Health Event"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />

            <EventCard
                imgSrc={Image4}
                eventTitle="Health Event"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />

            <EventCard
                imgSrc={Image5}
                eventTitle="Health Event"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />

            <EventCard
                imgSrc={Image6}
                eventTitle="Health Event"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />

            <EventCard
                imgSrc={Image1}
                eventTitle="Health Event"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />
        </div>
    )
}

export default Health;
