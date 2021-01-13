import React from 'react';

import skolakov from "../Pics/skolakov.jpg";
import lustenky from "../Pics/lustenky.jpg";
import oskar from "../Pics/oskar.jpg";
import snadhledem from "../Pics/snadhledem.jpg";
import primauca from "../Pics/primauca.jpg";
import ctedu from "../Pics/ctedu.jpg";
import ddm from "../Pics/ddm.jpg";
import veseledeti2 from "../Pics/veseledeti2.jpg";
import doprava from "../Pics/doprava.jpg";
import cesty from "../Pics/cesty.jpg";
import vojenskelesy from "../Pics/vojenskelesy.jpg";
import sumava from "../Pics/sumava.jpg";
import svycarsko from "../Pics/svycarsko.jpg";
import podyji from "../Pics/podyji.jpg";
import krkonose from "../Pics/krkonose.jpg";
import lesy from "../Pics/lesy.jpg";
import malypan from "../Pics/malypan.jpg";


export const Prvouka = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://skolakov.eu/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={skolakov} alt="Školákov" />
            </a>
            <a href="https://rysava.websnadno.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={lustenky} alt="Luštěnky" />
            </a>
            <a href="https://nns.cz/amos/objevujeme-a-poznavame-s-oskarem/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={oskar} alt="Objevujeme a poznáváme s Oskraem" />
            </a>
            <a href="https://www.skolasnadhledem.cz/profil/1-stupen/568-prvouka" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={ssnadhledem} alt="Škola s nadhledem" />
            </a>
            <a href="https://cz.pinterest.com/Primauca/_saved/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={primauca} alt="Prima úča" />
            </a>
            <a href="https://edu.ceskatelevize.cz/predmet/prvouka?stupen=1-stupen-zs" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={ctedu} alt="ČT edu" />
            </a>
            <a href="https://mitkamjit.cz/?zamereni=3&vek=" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={ddm} alt="Domy dětí a mládeže" />
            </a>

            <a href="https://pripravy.estranky.cz/clanky/prvouka" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={veseledeti2} alt="Veselé děti" />
            </a>
            <a href="https://www.dopravnivychova.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={doprava} alt="doprava" />
            </a>
            <a href="https://www.bezpecnecesty.cz/cz/dopravni-vychova" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={cesty} alt="Bezpečné cesty" />
            </a>
            <a href="https://deti.vls.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={vojenskelesy} alt="vojenské lesy" />
            </a>
            <a href="https://www.npsumava.cz/navstivte-sumavu/materialy-ke-stazeni/samoobsluzne-pracovni-listy/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={sumava} alt="Národní park Šumava" />
            </a>
            <a href="https://www.npcs.cz/evvopublikace" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={svycarsko} alt="Národní park Švýcarsko" />
            </a>
            <a href="https://www.nppodyji.cz/sdetmidoma" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={podyji} alt="Národní park Podyjí" />
            </a>
            <a href="https://www.krnap.cz/brozury/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={krkonose} alt="Národní park Krkonoše" />
            </a>
            <a href="https://lesycr.cz/navstevnici-lesa/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={lesy} alt="Lesy ČR" />
            </a>
            <a href="https://www.youtube.com/playlist?list=PLMrIwta5vAVkZSpa6pmhU5qYEUKPyODt0" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={malypan} alt="Malý pán" />
            </a>


        </div>
    )
}