import React from 'react';
import './styles/ShimerCard.css';

function ShimmerCard(){
    return(
        <>
            <div className="loader-card br">
                <div className="wrapper">
                    <div className="profilePic animate din"/>
                    <div className="comment br animate w80"/>
                    <div className="comment br animate"/>
                    <div className="comment br animate"/>
                </div>
            </div>
        </>
    );
}

export default ShimmerCard;