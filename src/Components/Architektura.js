import React from 'react';

import pilir from "../Pics/pilir.jpg";

export const Architektura = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://www.casopispilir.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={pilir} alt="pilir" />
            </a>
        </div>
    )
}