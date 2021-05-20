import React from 'react';

function CarouselCard(props){

    const {image, title, description} = props.data;

    return(
        <>
            <div className="slide active">
                <img src={image} alt="this is some graphic"/>
                <div className="info">
                    <h2>{title}</h2>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
}

export default CarouselCard;
