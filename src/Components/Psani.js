import React from 'react'

import skolakov from "../Pics/skolakov.jpg";
import lustenky from "../Pics/lustenky.jpg";
import agata from "../Pics/agata.jpg";

export const Psani = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://skolakov.eu/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={skolakov} alt="skolakov" />
            </a>
            <a href="https://rysava.websnadno.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={lustenky} alt="lustenky" />
            </a>
            <a href="https://nns.cz/agata/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={agata} alt="agata" />
            </a>
        </div>
    )
}