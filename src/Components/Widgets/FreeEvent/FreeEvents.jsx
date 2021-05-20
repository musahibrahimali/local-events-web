import React from 'react';
import './FreeEvents.css';
import {EventCard} from "../WidgetExport";
import {Image1, Image3, Image4, Image5, Image6} from "../../../assets/AssetExport";

function FreeEvents() {
    return (
        <div className="free-events-container">
            <EventCard
                imgSrc={Image3}
                eventTitle="Free Event"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />

            <EventCard
                imgSrc={Image4}
                eventTitle="Free Event"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />

            <EventCard
                imgSrc={Image5}
                eventTitle="Free Event"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />

            <EventCard
                imgSrc={Image6}
                eventTitle="Free Event"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />

            <EventCard
                imgSrc={Image1}
                eventTitle="Free Event"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />
        </div>
    )
}

export default FreeEvents;
