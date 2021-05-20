import React, {useEffect, useState} from 'react';
import {Image8, Image9, Image10, Image11, Image12} from '../../assets/AssetExport';
import CarouselCard from "./CarouselCard";
import './styles/ImageCarousel.css';

function ImageCarousel() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: "Winter Mountains",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ",
            image: Image8,
        }, {
            id: 2,
            title: "Tropical Desert",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ",
            image: Image9,
        }, {
            id: 3,
            title: "Steaming Volcanoes",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ",
            image: Image10,
        }, {
            id: 4,
            title: "Mountain River",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ",
            image: Image11,
        }, {
            id: 5,
            title: "Egypt Pyramids",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ",
            image: Image12,
        },
    ];

    const slideNext = (event) => {
        event.preventDefault();
        setCurrentSlide((prev) => {
            return prev + 1 === slides.length ? 0 : currentSlide + 1;
        });
    };
    const slidePrev = (event) => {
        event.preventDefault();
        setCurrentSlide((prev) => {
            return prev === 0 ? slides.length - 1 : currentSlide - 1;
        });
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prev) => {
                return prev + 1 === slides.length ? 0 : prev + 1;
            });
        }, 5000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <div className="slider">
                <CarouselCard
                    data={slides[currentSlide]}
                />
                <div className="navigation">
                    <i className="fas fa-chevron-left prev-btn" onClick={slidePrev}/>
                    <i className="fas fa-chevron-right next-btn" onClick={slideNext}/>
                </div>
                <div className="navigation-visibility">
                    <div className={currentSlide === 0 ? "slide-icon active" : "slide-icon"}/>
                    <div className={currentSlide === 1 ? "slide-icon active" : "slide-icon"}/>
                    <div className={currentSlide === 2 ? "slide-icon active" : "slide-icon"}/>
                    <div className={currentSlide === 3 ? "slide-icon active" : "slide-icon"}/>
                    <div className={currentSlide === 4 ? "slide-icon active" : "slide-icon"}/>
                </div>
            </div>
        </>
    );
}

export default ImageCarousel;
