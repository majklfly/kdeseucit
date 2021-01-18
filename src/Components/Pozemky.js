import React from 'react';

import svycarsko from "../Pics/svycarsko.jpg";
import ucimesevenku from "../Pics/ucimesevenku.jpg";

export const Pozemky = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://www.npcs.cz/evvopublikace" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={svycarsko} alt="svycarsko" />
            </a>
            <a href="https://ucimesevenku.cz/stahuji/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={ucimesevenku} alt="Učíme se venku" />
            </a>
        </div>
    )
}