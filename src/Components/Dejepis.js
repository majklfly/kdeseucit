import React from 'react';

import snadhledem from "../Pics/snadhledem.jpg";
import umimefakta from "../Pics/umimefakta.jpg";
import khan from "../Pics/khan.jpg";
import dejepisne from "../Pics/dejepisne.jpg";
import dejepis from "../Pics/dejepis.jpg";
import ctedu from "../Pics/ctedu.jpg";
import odpoledka from "../Pics/odpoledka.jpg";
import rozhlastemata from "../Pics/rozhlastemata.jpg";
import d21 from "../Pics/d21.jpg";
import abc from "../Pics/abc.jpg";
import udatny from "../Pics/udatny.jpg";
import timixi from "../Pics/timixi.jpg";
import historylab from "../Pics/historylab.jpg";
import testpark from "../Pics/testpark.jpg";
import veseledeti from "../Pics/veseledeti.jpg";
import pitter from "../Pics/pitter.jpg";
import pametromu from "../Pics/pametromu.jpg";
import lezak from "../Pics/lezak.jpg";
import legiokarty from "../Pics/legiokarty.jpg";

export const Dejepis = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://www.skolasnadhledem.cz/profil/2-stupen/881-Dejepis" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={snadhledem} alt="snadhledem" />
            </a>
            <a href="https://www.umimefakta.cz/testy-dejepis" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={umimefakta} alt="Umíme fakta" />
            </a>
            <a href="https://khanovaskola.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={khan} alt="Khanova škola" />
            </a>
            <a href="https://www.dejepisne.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={dejepisne} alt="dějepisně" />
            </a>
            <a href="https://www.dejepis.com/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={dejepis} alt="Dějepis" />
            </a>
            <a href="https://edu.ceskatelevize.cz/predmet/dejepis" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={ctedu} alt="ČT edu" />
            </a>
            <a href="https://www.ceskatelevize.cz/tv-program/hledani/?filtr%5bnadtitul%5d=Odpoledka" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={odpoledka} alt="Odpoledka" />
            </a>
            <a href="https://temata.rozhlas.cz/historie" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={rozhlastemata} alt="Rozhlas témata" />
            </a>
            <a href="https://www.youtube.com/channel/UCCt8ZuhBWud7EPkFN8vcdaQ/videos" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={d21} alt="Dějepis v 21.století" />
            </a>
            <a href="https://www.abicko.cz/kategorie/6317/historie" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={abc} alt="Časopis ABC" />
            </a>
            <a href="https://www.youtube.com/channel/UCCt8ZuhBWud7EPkFN8vcdaQ/videos" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={udatny} alt="Dějiny udatného českého národa" />
            </a>
            <a href=" https://whooshback.com/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={legiokarty} alt="Historie v kartách" />
            </a>
            <a href="https://historylab.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={historylab} alt="History lab" />
            </a>
            <a href="http://www.testpark.cz/testy/dejepis" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={testpark} alt="Test park" />
            </a>
            <a href="https://www.ucenionline.com/dejepis/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={veseledeti} alt="veselé děti" />
            </a>
            <a href="https://www.pametromu.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={pametromu} alt="Paměť Romů" />
            </a>           
            <a href="https://www.npmk.cz/pro-skoly/premysl-pitter" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={pitter} alt="Přemysl Pitter" />
            </a>
            <a href="https://www.timixi.com/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={timixi} alt="timixi" />
            </a>
            <a href="http://zdeneklezak.cz/autorske-knihy/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={lezak} alt="Zdeněk Ležák - Komiksy o české historii" />
            </a>
        </div>
    )
}