import React from 'react';

import matikain from "../Pics/matikain.jpg";

export const Alternativni = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://www.matika.in/cs/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={matikain} alt="matikain" />
            </a>
        </div>
    )
}