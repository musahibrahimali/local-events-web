import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar, Footer, HeroSection, Events } from '../index';
import {
  AllEvents,
  Conference,
  Education,
  Festival,
  FreeEvents,
  Funeral,
  Health,
  MusicEvents,
  Party,
  Today,
  Wedding,
  WeekEnd,
} from '../Widgets/WidgetExport';
import './Pages.css';

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <HeroSection />
        <Events />

        <Router>
          <Switch>
            <Route to="all-events" exact component={AllEvents} />
            <Route to="today-events" exact component={Today} />
            <Route to="weekend-events" exact component={WeekEnd} />
            <Route to="party-events" exact component={Party} />
            <Route to="wedding-events" exact component={Wedding} />
            <Route to="funeral-events" exact component={Funeral} />
            <Route to="festival-events" exact component={Festival} />
            <Route to="conference-events" exact component={Conference} />
            <Route to="music-events" exact component={MusicEvents} />
            <Route to="education-events" exact component={Education} />
            <Route to="health-events" exact component={Health} />
            <Route to="free-events" exact component={FreeEvents} />
          </Switch>
        </Router>

      </div>
      <Footer />
    </>
  );
}
