import React from 'react';

import snadhledem from "../Pics/snadhledem.jpg";

export const Prirodopis = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://www.skolasnadhledem.cz/profil/2-stupen/881-prirodopis" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={snadhledem} alt="snadhledem" />
            </a>
        </div>
    )
}