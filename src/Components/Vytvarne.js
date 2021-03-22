import React from "react";

import ddm from "../Pics/ddm.jpg";
import ctedu from "../Pics/ctedu.jpg";
import krokotak from "../Pics/krokotak.jpg";
import juch from "../Pics/juch.jpg";
import napady from "../Pics/napady.jpg";
import hello from "../Pics/hello.jpg";
import lizard from "../Pics/lizard.jpg";
import pinterest from "../Pics/pinterest.jpg";
import grafeditor from "../Pics/grafeditor.jpg";
import village from "../Pics/village.jpg";
import khannew from "../Pics/khannew.jpg";
import mozaik from "../Pics/mozaik.jpg";
import studijnisvet from "../Pics/studijnisvet.jpg";
import galerie from "../Pics/galerie.jpg";
import zcgalerie from "../Pics/zcgalerie.jpg";
import testovano from "../Pics/testovano.jpg";
import komiks from "../Pics/komiks.jpg";

export const Vytvarne = () => {
  return (
    <div className="BoxProKarty">
      <a
        href="https://mitkamjit.cz/?zamereni=8&vek="
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ddm} alt="ddm" />
      </a>
      <a
        href="https://edu.ceskatelevize.cz/predmet/vytvarne-aktivity"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ctedu} alt="ctedu" />
      </a>
      <a href="http://krokotak.com/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={krokotak} alt="krokotak" />
      </a>
      <a
        href="http://www.juchuuu.cz/stahovani/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={juch} alt="juch" />
      </a>
      <a
        href="https://www.napadyproanicku.cz/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={napady} alt="napady" />
      </a>
      <a
        href="https://www.hellowonderful.co/category/create/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={hello} alt="hello" />
      </a>
      <a
        href="https://lizardpoint.com/art/index.php"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={lizard} alt="lizard" />
      </a>
      <a href="https://cz.pinterest.com/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={pinterest} alt="pinterest" />
      </a>
      <a href="https://www.canva.com/cs_cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={grafeditor} alt="grafeditor" />
      </a>
      <a
        href="https://www.activityvillage.co.uk/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={village} alt="village" />
      </a>
      <a href="https://khanovaskola.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={khannew} alt="Khanova škola" />
      </a>
      <a
        href="https://www.mozaweb.com/cs/lexikon.php?cmd=getlist&let=3D&sid=VIZ"
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
        href="https://www.abicko.cz/clanek/precti-si-zabava/23772/komiks-s-rozumem-1-jak-se-kresli-komiks.html"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={komiks} alt="komiks" />
      </a>
      <a
        href="https://www.testovanonadetech.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={testovano} alt="testovano" />
      </a>
      <a
        href="https://dejiny-online.cz/maturitni-otazky-z-dejin-umeni-a-vytvarne-vychovy/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={studijnisvet} alt="Studijní svět" />
      </a>
      <a
        href="https://www.ceskegalerie.cz/cs/zpravy/vytvarne-umeni-online-ix-komentovane-prohlidky"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={galerie} alt="galerie" />
      </a>
      <a
        href="http://www.zpc-galerie.cz/online"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={zcgalerie} alt="zcgalerie" />
      </a>
    </div>
  );
};
