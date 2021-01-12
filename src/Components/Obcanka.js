import React from 'react';

import snadhledem from "../Pics/snadhledem.jpg";

export const Obcanka = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://www.skolasnadhledem.cz/profil/2-stupen/2298-obcanska-vychova" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={snadhledem} alt="snadhledem" />
            </a>
        </div>
    )
}