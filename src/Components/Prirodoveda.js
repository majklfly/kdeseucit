import React from 'react';

import lustenky from "../Pics/lustenky.jpg";

export const Prirodoveda = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://rysava.websnadno.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={lustenky} alt="lustenky" />
            </a>
        </div>
    )
}