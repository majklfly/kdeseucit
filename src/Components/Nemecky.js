import React from 'react';

import umimenemecky from "../Pics/umimenemecky.jpg";

export const Nemecky = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://www.umimenemecky.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={umimenemecky} alt="umimenemecky" />
            </a>
        </div>
    )
}