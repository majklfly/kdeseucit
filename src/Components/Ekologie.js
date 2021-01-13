import React from 'react';

import step from "../Pics/step.jpg";
import step from "../Pics/step.jpg";
import step from "../Pics/step.jpg";
import veronica from "../Pics/veronica.jpg";


export const Ekologie = () => {
    return (
        <div className="BoxProKarty">
            <a href="http://wiki.ekoporadna.cz" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={step} alt="STEP síť ekologických poraden" />
            </a>
            <a href="https://www.facebook.com/groups/906961889479119/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={facebookenviro} alt="Enviromentální výchova a vzdělávání" />
            </a>
            <a href="https://www.facebook.com/groups/594820014006582/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={ptaciporadna} alt="Ptačí poradna" />
            </a>
            <a href="http://www.casopisveronica.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={veronica} alt="veronica" />
            </a>

        </div>
    )
}