import React from 'react';

import veseledeti from "../Pics/veseledeti.jpg";

export const Informatika = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://pripravy.estranky.cz/clanky/informatika.html" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={veseledeti} alt="veseledeti" />
            </a>
        </div>
    )
}