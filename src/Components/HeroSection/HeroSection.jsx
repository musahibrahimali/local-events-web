import React from 'react';
import './styles/HeroSection.css';
import ImageCarousel from "./ImageCarousel";
import {Video2} from "../../assets/AssetExport";

function HeroSection() {
    return (
        <>
            <section className="hero-section">
                <video className="video" src={Video2} autoPlay loop muted/>
                <div className="banner">
                    <h1 className="banner-title">Learn more about Covid-19</h1>
                    <p className="banner-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil numquam, at, non omnis saepe
                        aliquid consequuntur odio quas illum quidem cumque alias earum fuga nisi officia quasi voluptas
                        quos iste?
                    </p>
                </div>
                <div className="hero-deco">
                        <ImageCarousel/>
                </div>
            </section>
        </>
    )
}

export default HeroSection;
