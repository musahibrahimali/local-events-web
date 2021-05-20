import React from 'react';
import { NavBar, Footer, HeroSection, Events } from '../index';
import './Pages.css';

function Home() {
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <HeroSection />
        <Events />
      </div>
      <Footer />
    </>
  );
}

export default Home;
