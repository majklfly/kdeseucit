import React from 'react';

import snadhledem from "../Pics/snadhledem.jpg";
import ctedu from "../Pics/ctedu.jpg";
import tvmonde from "../Pics/tvmonde.jpg";
import clic from "../Pics/clic.jpg";
import hugo from "../Pics/hugo.jpg";

export const Francouzsky = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://www.snadhledem.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={snadhledem} alt="snadhledem" />
            </a>
            <a href="https://edu.ceskatelevize.cz/predmet/francouzsky-jazyk" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={ctedu} alt="ctedu" />
            </a>
            <a href="https://edu.ceskatelevize.cz/predmet/francouzsky-jazyk" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={tvmonde} alt="tvmonde" />
            </a>
            <a href="http://www.cndp.fr/crdp-dijon/-Clic-images-.html" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={clic} alt="clic" />
            </a>
            <a href="https://www.hugolescargot.com/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={hugo} alt="hugo" />
            </a>
        </div>
    )
}