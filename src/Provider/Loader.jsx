import React from 'react';
import './Loader.css';

function Loader(){
    return(
        <div className="loader-wrap">
            <div className="loader">
                <div className="box-1 box"/>
                <div className="box-2 box"/>
                <div className="box-3 box"/>
                <div className="box-4 box"/>
                <div className="box-5 box"/>
            </div>
        </div>
    );
}

export default Loader;
