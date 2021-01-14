import React from 'react';

import georgina from "../Pics/georgina.jpg";
import snadhledem from "../Pics/snadhledem.jpg";
import umimefakta from "../Pics/umimefakta.jpg";
import testpark from "../Pics/testpark.jpg";
import ctedu from "../Pics/ctedu.jpg";
import odpoledka from "../Pics/odpoledka.jpg";
import rozhlastemata from "../Pics/rozhlastemata.jpg";
import veseledeti from "../Pics/veseledeti.jpg";
import lizard from "../Pics/lizard.jpg";
import oldmaps from "../Pics/oldmaps.jpg";

export const Zemepis = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://www.geograf.in/cs/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={georgina} alt="georgina" />
            </a>
            <a href="https://www.skolasnadhledem.cz/profil/2-stupen/982-zemepis" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={snadhledem} alt="Škola s nadhledem" />
            </a>
            <a href="https://www.umimefakta.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={umimefakta} alt="Umíme fakta" />
            </a>
            <a href="http://www.testpark.cz/testy/dejepis" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={testpark} alt="Test park" />
            </a>
            <a href="https://edu.ceskatelevize.cz/predmet/zemepis" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={ctedu} alt="ČTedu" />
            </a>
            <a href="https://www.ceskatelevize.cz/tv-program/hledani/?filtr%5bnadtitul%5d=Odpoledka" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={odpoledka} alt="odpoledka" />
            </a>
            <a href="https://temata.rozhlas.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={rozhlastemata} alt="Rozhlas témata" />
            </a>
            <a href="https://www.ucenionline.com/zemepis/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={veseledeti} alt="Veselé děti" />
            </a>
            <a href="https://lizardpoint.com/geography/index.php" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={lizard} alt="lizard" />
            </a>
            <a href="https://www.oldmapsonline.org/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={oldmaps} alt="Old maps" />
            </a>
        </div>
    )
}