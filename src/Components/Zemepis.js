import React from 'react';

import georgina from "../Pics/georgina.jpg";

export const Zemepis = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://www.geograf.in/cs/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={georgina} alt="georgina" />
            </a>
        </div>
    )
}