import React, {useEffect, useState} from 'react';
import EventItems from './EventItem';
import {
    AllEvents,
    Conference,
    Education, Featured,
    Festival,
    FreeEvents,
    Funeral,
    Health,
    MusicEvents,
    Party, Popular,
    Today,
    Wedding,
    WeekEnd,
} from '../Widgets/WidgetExport';
import './Events.css';


function Events() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [allEvents, setAllEvents] = useState(true);
    const [today, setToday] = useState(false);
    const [weekEnd, setWeekEnd] = useState(false);
    const [party, setParty] = useState(false);
    const [wedding, setWedding] = useState(false);
    const [funeral, setFuneral] = useState(false);
    const [festival, setFestival] = useState(false);
    const [conference, setConference] = useState(false);
    const [musicEvents, setMusicEvents] = useState(false);
    const [education, setEducation] = useState(false);
    const [health, setHealth] = useState(false);
    const [freeEvents, setFreeEvents] = useState(false);

    const showAllEvents = () => {
        setAllEvents(true);
        setToday(false);
        setWeekEnd(false);
        setParty(false);
        setWedding(false);
        setFuneral(false);
        setFestival(false);
        setConference(false);
        setMusicEvents(false);
        setEducation(false);
        setHealth(false);
        setFreeEvents(false);
    }

    const showTodayEvents = () => {
        setAllEvents(false);
        setToday(true);
        setWeekEnd(false);
        setParty(false);
        setWedding(false);
        setFuneral(false);
        setFestival(false);
        setConference(false);
        setMusicEvents(false);
        setEducation(false);
        setHealth(false);
        setFreeEvents(false);
    }

    const showWeekEndEvents = () => {
        setAllEvents(false);
        setToday(false);
        setWeekEnd(true);
        setParty(false);
        setWedding(false);
        setFuneral(false);
        setFestival(false);
        setConference(false);
        setMusicEvents(false);
        setEducation(false);
        setHealth(false);
        setFreeEvents(false);
    }

    const showPartyEvents = () => {
        setAllEvents(false);
        setToday(false);
        setWeekEnd(false);
        setParty(true);
        setWedding(false);
        setFuneral(false);
        setFestival(false);
        setConference(false);
        setMusicEvents(false);
        setEducation(false);
        setHealth(false);
        setFreeEvents(false);
    }

    const showWeddingEvents = () => {
        setAllEvents(false);
        setToday(false);
        setWeekEnd(false);
        setParty(false);
        setWedding(true);
        setFuneral(false);
        setFestival(false);
        setConference(false);
        setMusicEvents(false);
        setEducation(false);
        setHealth(false);
        setFreeEvents(false);
    }

    const showFuneralEvents = () => {
        setAllEvents(false);
        setToday(false);
        setWeekEnd(false);
        setParty(false);
        setWedding(false);
        setFuneral(true);
        setFestival(false);
        setConference(false);
        setMusicEvents(false);
        setEducation(false);
        setHealth(false);
        setFreeEvents(false);
    }

    const showFestivalEvents = () => {
        setAllEvents(false);
        setToday(false);
        setWeekEnd(false);
        setParty(false);
        setWedding(false);
        setFuneral(false);
        setFestival(true);
        setConference(false);
        setMusicEvents(false);
        setEducation(false);
        setHealth(false);
        setFreeEvents(false);
    }

    const showConferenceEvents = () => {
        setAllEvents(false);
        setToday(false);
        setWeekEnd(false);
        setParty(false);
        setWedding(false);
        setFuneral(false);
        setFestival(false);
        setConference(true);
        setMusicEvents(false);
        setEducation(false);
        setHealth(false);
        setFreeEvents(false);
    }

    const showMusicEventEvents = () => {
        setAllEvents(false);
        setToday(false);
        setWeekEnd(false);
        setParty(false);
        setWedding(false);
        setFuneral(false);
        setFestival(false);
        setConference(false);
        setMusicEvents(true);
        setEducation(false);
        setHealth(false);
        setFreeEvents(false);
    }

    const showEducationEvents = () => {
        setAllEvents(false);
        setToday(false);
        setWeekEnd(false);
        setParty(false);
        setWedding(false);
        setFuneral(false);
        setFestival(false);
        setConference(false);
        setMusicEvents(false);
        setEducation(true);
        setHealth(false);
        setFreeEvents(false);
    }

    const showHealthEvents = () => {
        setAllEvents(false);
        setToday(false);
        setWeekEnd(false);
        setParty(false);
        setWedding(false);
        setFuneral(false);
        setFestival(false);
        setConference(false);
        setMusicEvents(false);
        setEducation(false);
        setHealth(true);
        setFreeEvents(false);
    }

    const showFreeEvents = () => {
        setAllEvents(false);
        setToday(false);
        setWeekEnd(false);
        setParty(false);
        setWedding(false);
        setFuneral(false);
        setFestival(false);
        setConference(false);
        setMusicEvents(false);
        setEducation(false);
        setHealth(false);
        setFreeEvents(true);
    }

    const handleOnClick = (index) => {
        console.log(index);
        switch (index) {
            case 0:
                showAllEvents();
                break;
            case 1:
                showTodayEvents();
                break;
            case 2:
                showWeekEndEvents();
                break;
            case 3:
                showPartyEvents();
                break;
            case 4:
                showWeddingEvents();
                break;
            case 5:
                showFuneralEvents();
                break;
            case 6:
                showFestivalEvents();
                break;
            case 7:
                showConferenceEvents();
                break;
            case 8:
                showMusicEventEvents();
                break;
            case 9:
                showEducationEvents();
                break;
            case 10:
                showHealthEvents();
                break;
            case 11:
                showFreeEvents();
                break;
            default:
                showAllEvents();
                break;

        }
    }

    useEffect(() => {
        handleOnClick();
    }, []);

    return (
        <>
            <div className="events-wrapper">
                <div className="events-component">
                    <nav>
                        <ul className="event-menu">
                            {
                                EventItems.map((item, index) => {
                                    return (

                                        <li
                                            key={index}
                                            className="event-item"
                                            onClick={() => {
                                                setActiveIndex(index);
                                                handleOnClick(index)
                                            }}
                                        >
                                            <p
                                                className={index === activeIndex ? `${item.cName} active-event` : item.cName}
                                            >
                                                {item.title}
                                            </p>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </nav>
                    <Popular title="Popular Events"/>
                    <Featured title="Featured Events"/>
                </div>
                {allEvents && <AllEvents title="All"/>}
                {today && <Today title="Today"/>}
                {weekEnd && <WeekEnd title="Weekend"/>}
                {party && <Party title="Parties and Celebrations"/>}
                {wedding && <Wedding title="Weddings and Engagements"/>}
                {funeral && <Funeral title="Funerals"/>}
                {festival && <Festival title="Festivals"/>}
                {conference && <Conference title="Conferences"/>}
                {musicEvents && <MusicEvents title="Music"/>}
                {education && <Education title="Education"/>}
                {health && <Health title="Health and Wellness"/>}
                {freeEvents && <FreeEvents title="Free"/>}
            </div>
        </>
    )
}

export default Events;
