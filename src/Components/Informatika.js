import React from 'react';

import veseledeti from "../Pics/veseledeti.jpg";
import umimeprogramovat from "../Pics/umimeprogramovat.jpg";
import khan from "../Pics/khan.jpg";
import ctedu from "../Pics/ctedu.jpg";
import ddm from "../Pics/ddm.jpg";
import matematikacz from "../Pics/matematikacz.jpg";
import chmelinf from "../Pics/chmelinf.jpg";
import nabla from "../Pics/nabla.jpg";
import maprokazdeho from "../Pics/maprokazdeho.jpg";
import chapes from "../Pics/chapes.jpg";
import rozhlastemata from "../Pics/rozhlastemata.jpg";
import vedanadoma from "../Pics/vedanadoma.jpg";
import tydenvedy from "../Pics/tydenvedy.jpg";
import canva from "../Pics/canva.jpg";
import quizlet from "../Pics/quizlet.jpg";
import ajtak from "../Pics/ajtak.jpg";
import code from "../Pics/code.jpg";
import ai from "../Pics/ai.jpg";
import wix from "../Pics/wix.jpg";
import scratch from "../Pics/scratch.jpg";


export const Informatika = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://pripravy.estranky.cz/clanky/informatika.html" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={veseledeti} alt="veseledeti" />
            </a>
            <a href="https://www.umimeprogramovat.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={umimeprogramovat} alt="Umíme programovat" />
            </a>
            <a href="https://cs.khanacademy.org/computing" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={khan} alt="Khanova škola" />
            </a>
            <a href="https://edu.ceskatelevize.cz/predmet/ict" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={ctedu} alt="ČTedu" />
            </a>
            <a href="https://mitkamjit.cz/?zamereni=2&vek=" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={ddm} alt="Dům dětí a mládeže" />
            </a>
            <a href="https://matematika.cz/kategorie-informatika" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={matematikacz} alt="Matematika.cz" />
            </a>
            <a href="http://www.chmelkova.cz/web_skolicka/informatika_4.html" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={chmelinf} alt="Chmelková informatika pro 4.třídu" />
            </a>
            <a href="http://www.nabla.cz/obsah/programovani/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={nabla} alt="nabla" />
            </a>
            <a href="https://www.maths.cz/clanek/kategorie/30" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={maprokazdeho} alt="vMatematika pro každého" />
            </a>
            <a href="https://chapes.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={chapes} alt="Chápeš" />
            </a>
            <a href="https://temata.rozhlas.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={rozhlastemata} alt="Rozhlas témata" />
            </a>
            <a href="https://www.avcr.cz/cs/pro-verejnost/veda-na-doma/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={vedanadoma} alt="Věda na doma" />
            </a>
            <a href="https://www.tydenvedy.cz/festival/best-of-tvt/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={tydenvedy} alt="Týden vědy" />
            </a>
            <a href="https://www.canva.com/cs_cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={canva} alt="grafický editor Canva" />
            </a>
            <a href="https://quizlet.com/en-gb" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={quizlet} alt="Vytvoř si kvíz!" />
            </a>
            <a href="https://www.czechitas.cz/cs/blog/zaciname-s-it/naprogramuj-si-vlastni-hru" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={ajtak} alt="Naprogramuj si vlastní hru" />
            </a>
            <a href="https://studio.code.org/projects/public" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={code} alt="Code" />
            </a>
            <a href="https://pripravy.estranky.cz/clanky/informatika.html" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={ai} alt="Umělá inteligence - co to je?" />
            </a>
            <a href="https://cs.wix.com/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={wix} alt="Vytvoř si webové stránky" />
            </a>
            <a href="https://scratch.mit.edu/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={scratch} alt="Jednoduché programování animací a her" />
            </a>
        </div>
    )
}