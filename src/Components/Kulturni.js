import React from 'react';

import onlineknihovny from "../Pics/onlineknihovny.jpg";

export const Kulturni = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://online.knihovny.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={onlineknihovny} alt="onlineknihovny" />
            </a>
        </div>
    )
}