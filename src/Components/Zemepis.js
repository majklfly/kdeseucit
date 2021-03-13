import React from "react";

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
import atlas from "../Pics/atlas.jpg";
import mozaik from "../Pics/mozaik.jpg";
import ucseonline from "../Pics/ucseonline.jpg";
import studijnisvet from "../Pics/studijnisvet.jpg";
import pudding from "../Pics/pudding.jpg";
import damborice from "../Pics/damborice.jpg";

export const Zemepis = () => {
  return (
    <div className="BoxProKarty">
      <a href="https://www.geograf.in/cs/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={georgina} alt="georgina" />
      </a>
      <a
        href="https://www.skolasnadhledem.cz/profil/2-stupen/982-zemepis"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={snadhledem}
          alt="Škola s nadhledem"
        />
      </a>
      <a href="https://www.umimefakta.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={umimefakta} alt="Umíme fakta" />
      </a>
      <a
        href="http://www.testpark.cz/testy/zemepis"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={testpark} alt="Test park" />
      </a>
      <a
        href="https://edu.ceskatelevize.cz/predmet/zemepis"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ctedu} alt="ČTedu" />
      </a>
      <a
        href="https://www.ceskatelevize.cz/tv-program/hledani/?filtr%5bnadtitul%5d=Odpoledka"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={odpoledka} alt="odpoledka" />
      </a>
      <a href="https://temata.rozhlas.cz/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={rozhlastemata}
          alt="Rozhlas témata"
        />
      </a>
      <a
        href="https://www.ucenionline.com/zemepis/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={veseledeti} alt="Veselé děti" />
      </a>
      <a href="https://atlas.mapy.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={atlas} alt="Atlas světa" />
      </a>
      <a
        href="https://www.ucseonline.cz/zemepis/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ucseonline} alt="Uč se online" />
      </a>
      <a href="https://www.zemmat.cz/home" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={damborice} alt="Dambořice" />
      </a>
      <a
        href="https://lizardpoint.com/geography/index.php"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={lizard} alt="lizard" />
      </a>
      <a href="https://www.oldmapsonline.org/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={oldmaps} alt="Old maps" />
      </a>
      <a
        href="https://www.mozaweb.com/cs/lexikon.php?cmd=getlist&let=VIDEO&sid=FOL"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={mozaik}
          alt="mozaik"
          title="3D modely a prezentace"
        />
      </a>
      <a
        href="https://studijni-svet.cz/zemepis/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={studijnisvet} alt="Studijní svět" />
      </a>
      <a
        href="https://pudding.cool/2018/10/city_3d/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={pudding} alt="pudding" />
      </a>
    </div>
  );
};
