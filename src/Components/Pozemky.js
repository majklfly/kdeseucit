import React from 'react';

import svycarsko from "../Pics/svycarsko.jpg";

export const Pozemky = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://www.npcs.cz/evvopublikace" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={svycarsko} alt="svycarsko" />
            </a>
        </div>
    )
}