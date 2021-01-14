import React from 'react';

import otevrene from "../Pics/otevrene.jpg";
import zdroje from "../Pics/zdroje.jpg";

export const Ucitele = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://otevrenevzdelavani.cz/otevrene-zdroje/?fbclid=IwAR3LGKcS447xHBm7huZq-hiXYajBHk9Mc5lJthjIkkEtBqLU-OcP_laDDJU" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={otevrene} alt="otevrene" />
            </a>
            <a href="https://zdroje.guruveskole.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={zdroje} alt="zdroje" />
            </a>
        </div>
    )
}