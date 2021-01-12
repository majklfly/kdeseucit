import React from 'react';

import skolakov from "../Pics/skolakov.jpg";

export const Vlastiveda = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://skolakov.eu/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={skolakov} alt="skolakov" />
            </a>
        </div>
    )
}