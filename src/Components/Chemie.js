import React from "react";

import snadhledem from "../Pics/snadhledem.jpg";
import umimefakta from "../Pics/umimefakta.jpg";
import curko from "../Pics/curko.jpg";
import khan from "../Pics/khan.jpg";
import nabla from "../Pics/nabla.jpg";
import isibalo from "../Pics/isibalo.jpg";
import testpark from "../Pics/testpark.jpg";
import ctedu from "../Pics/ctedu.jpg";
import maprokazdeho from "../Pics/maprokazdeho.jpg";
import animacechemie from "../Pics/animacechemie.jpg";
import zadnaveda from "../Pics/zadnaveda.jpg";
import kladivo from "../Pics/kladivo.jpg";
import rozhlastemata from "../Pics/rozhlastemata.jpg";
import badatelna from "../Pics/badatelna.jpg";
import vedanadoma from "../Pics/vedanadoma.jpg";
import chemix from "../Pics/chemix.jpg";
import tydenvedy from "../Pics/tydenvedy.jpg";
import bavse from "../Pics/bavse.jpg";

export const Chemie = () => {
  return (
    <div className="BoxProKarty">
      <a
        href="https://www.skolasnadhledem.cz/profil/2-stupen/820-chemie"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={snadhledem} alt="snadhledem" />
      </a>
      <a
        href="https://www.umimefakta.cz/chemie"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={umimefakta} alt="Umíme fakta" />
      </a>
      <a
        href="https://www.youtube.com/user/anubiskt/videos"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={curko} alt="Petr Curko" />
      </a>
      <a href="https://khanovaskola.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={khan} alt="Khanova škola" />
      </a>
      <a
        href="http://www.nabla.cz/obsah/chemie/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={nabla} alt="nabla" />
      </a>
      <a href="https://isibalo.com/chemie" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={isibalo} alt="isibalo" />
      </a>
      <a
        href="http://www.testpark.cz/testy/chemie"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={testpark} alt="Test park" />
      </a>
      <a
        href="https://edu.ceskatelevize.cz/predmet/chemie"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ctedu} alt="ČT edu" />
      </a>
      <a
        href="https://www.maths.cz/clanek/kategorie/29"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={maprokazdeho}
          alt="Matematika pro každého"
        />
      </a>
      <a
        href="https://phet.colorado.edu/cs/simulations/filter?subjects=chemistry&type=html&sort=alpha&view=grid"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={animacechemie}
          alt="Animace chemických jevů"
        />
      </a>
      <a
        href="http://www.vedaneniveda.cz/vyukove-materialy-pro/2-stupen-zakladnich-skol/chemie"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={zadnaveda}
          alt="Věda není žádná věda"
        />
      </a>
      <a
        href="https://www.youtube.com/user/VedeckeKladivo/videos"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={kladivo} alt="Vědecké kladivo" />
      </a>
      <a href="https://temata.rozhlas.cz/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={rozhlastemata}
          alt="Rozhlas témata"
        />
      </a>
      <a
        href="https://www.youtube.com/user/ScienceMuni/videos"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={badatelna} alt="Badatelna" />
      </a>
      <a
        href="https://www.avcr.cz/cs/pro-verejnost/veda-na-doma/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={vedanadoma} alt="Věda na doma" />
      </a>
      <a href="https://chemix.org" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={chemix} alt="chemix" />
      </a>
      <a
        href="https://www.tydenvedy.cz/festival/best-of-tvt/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={tydenvedy} alt="Týden vědy" />
      </a>
      <a href="https://bavsevedou.zcu.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={bavse} alt="Bav se vědou" />
      </a>
    </div>
  );
};
