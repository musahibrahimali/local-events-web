import React from 'react';
import './HeroSection.css';
import { Button } from '../index';

function HeroSection() {
    return (
        <>
            <section className="hero-section">
                <div className="banner">
                    <h1 className="banner-title">Learn more about Covid-19</h1>
                    <p className="banner-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil numquam, at, non omnis saepe aliquid consequuntur odio quas illum quidem cumque alias earum fuga nisi officia quasi voluptas quos iste?
                </p>
                </div>
                <div className="hero-deco">
                    <div className="banner-graphics">
                        <h1 className="image-title">Enjoy events without leaving your home</h1>
                        <Button buttonStyle="btn--primary" buttonSize="btn--large">Lets Go</Button>
                    </div>
                    <div className="banner-content">
                        <p>Image Carousel Goes here</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection;
