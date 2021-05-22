import React, {useEffect, useState} from 'react';
import './Today.css';
import {EventCard} from "../WidgetExport";
import {Image1, Image3, Image4, Image5, Image6} from "../../../assets/AssetExport";
import {database} from "../../../Utils/firebase";

function Today({title}) {

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
            <div className="today-events-container">

                <EventCard
                    loading={loading}
                    imgSrc={Image3}
                    eventTitle="Today Events"
                    eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    eventDate="20th May 2021, Thursday, 14:00 GMT"
                />

                <EventCard
                    imgSrc={Image4}
                    eventTitle="Today Events"
                    eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    eventDate="20th May 2021, Thursday, 14:00 GMT"
                />

                <EventCard
                    imgSrc={Image5}
                    eventTitle="Today Events"
                    eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    eventDate="20th May 2021, Thursday, 14:00 GMT"
                />

                <EventCard
                    imgSrc={Image6}
                    eventTitle="Today Events"
                    eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    eventDate="20th May 2021, Thursday, 14:00 GMT"
                />

                <EventCard
                    imgSrc={Image1}
                    eventTitle="Today Events"
                    eventDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    eventDate="20th May 2021, Thursday, 14:00 GMT"
                />

            </div>
        </>
    )
}

export default Today
