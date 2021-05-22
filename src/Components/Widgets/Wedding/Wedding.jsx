import React, {useEffect, useState} from 'react';
import './Wedding.css';
import {EventCard} from "../WidgetExport";
import {Image1, Image3, Image4, Image5, Image6} from "../../../assets/AssetExport";
import {database} from "../../../Utils/firebase";

function Wedding({title}) {

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
        <>
            <div className="section-title">
                <h2> {title}</h2>
            </div>
            <div className="wedding-events-container">

                <EventCard
                    loading={loading}
                    imgSrc={Image3}
                    eventTitle="Wedding Event"
                    eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    eventDate="20th May 2021, Thursday, 14:00 GMT"
                />

                <EventCard
                    loading={loading}
                    imgSrc={Image4}
                    eventTitle="Wedding Event"
                    eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    eventDate="20th May 2021, Thursday, 14:00 GMT"
                />

                <EventCard
                    loading={loading}
                    imgSrc={Image5}
                    eventTitle="Wedding Event"
                    eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    eventDate="20th May 2021, Thursday, 14:00 GMT"
                />

                <EventCard
                    loading={loading}
                    imgSrc={Image6}
                    eventTitle="Wedding Event"
                    eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    eventDate="20th May 2021, Thursday, 14:00 GMT"
                />

                <EventCard
                    loading={loading}
                    imgSrc={Image1}
                    eventTitle="Wedding Event"
                    eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    eventDate="20th May 2021, Thursday, 14:00 GMT"
                />

                <EventCard
                    loading={loading}
                    imgSrc={Image1}
                    eventTitle="Wedding Event"
                    eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    eventDate="20th May 2021, Thursday, 14:00 GMT"
                />

            </div>
        </>
    )
}

export default Wedding;
