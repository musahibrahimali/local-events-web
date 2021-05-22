import React, {useEffect, useState} from 'react';
import './Conference.css';
import {EventCard} from "../WidgetExport";
import {Image1, Image3, Image4, Image5, Image6} from "../../../assets/AssetExport";
import {database} from "../../../Utils/firebase";

function Conference() {

    const [loading, setLoading] = useState(true);

    const handleLoading = () => setLoading(false);

    useEffect(() => {
        const fetData = async () => {
            try {
                const {data} = await database.ref('users').get();
                if (!data){
                    handleLoading();
                }
            }catch (e) {
                console.log(e);
            }

        }
        fetData().then(results => {console.log(results)});
    }, []);

    return (
        <div className="conference-events-container">

            <EventCard
                loading={loading}
                imgSrc={Image3}
                eventTitle="Conference"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />

            <EventCard
                loading={loading}
                imgSrc={Image4}
                eventTitle="Music Festival"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />

            <EventCard
                loading={loading}
                imgSrc={Image5}
                eventTitle="Music Festival"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />

            <EventCard
                loading={loading}
                imgSrc={Image6}
                eventTitle="Music Festival"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />

            <EventCard
                loading={loading}
                imgSrc={Image1}
                eventTitle="Music Festival"
                eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                eventDate="20th May 2021, Thursday, 14:00 GMT"
            />

        </div>
    )
}

export default Conference;
