import React from 'react';
import './Pages.css';
import { HeroSection, Events } from '../index';

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <HeroSection />
        <Events />

      </div>
    </>
  );
}
