import React from "react";
import "./componentStyles.css";

import predskolaci from "../Pics/predskolaci.jpg";
import cvrcek from "../Pics/cvrcek.jpg";
import cvicenitesty from "../Pics/cvicenitesty.jpg";
import ctedu from "../Pics/ctedu.jpg";
import nenudim from "../Pics/nenudim.jpg";
import krokotak from "../Pics/krokotak.jpg";
import doprava from "../Pics/doprava.jpg";
import napady from "../Pics/napady.jpg";
import hello from "../Pics/hello.jpg";
import juchu from "../Pics/juch.jpg";
import pinterest from "../Pics/pinterest.jpg";
import zvesela from "../Pics/zvesela.jpg";

export const Predskolaci = () => {
  return (
    <div className="BoxProKarty">
      <a href="https://www.predskolaci.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={predskolaci} alt="predskolaci" />
      </a>
      <a href="http://www.sikovny-cvrcek.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={cvrcek} alt="cvrcek" />
      </a>
      <a
        href="http://cviceni.testy.sweb.cz/index.htm"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={cvicenitesty} alt="cvicenitesty" />
      </a>
      <a
        href="https://edu.ceskatelevize.cz/stupen-vzdelani/predskolni"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ctedu} alt="ctedu" />
      </a>
      <a
        href="https://decko.ceskatelevize.cz/nenudim-se-doma/vzdelavani"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={nenudim} alt="nenudim" />
      </a>
      <a href="http://krokotak.com/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={krokotak} alt="krokotak" />
      </a>
      <a
        href="https://www.dopravnivychova.cz/stranky/98/pracovni-listy.html#sheet201"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={doprava} alt="doprava" />
      </a>
      <a
        href="https://www.napadyproanicku.cz/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={napady} alt="napady" />
      </a>
      <a
        href="https://www.skolazvesela.cz/category/predskolak/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={zvesela} alt="zvesela" />
      </a>
      <a
        href="https://www.hellowonderful.co/category/play/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={hello} alt="hello" />
      </a>
      <a
        href="http://www.juchuuu.cz/stahovani/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={juchu} alt="juchu" />
      </a>
      <a href="https://cz.pinterest.com/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={pinterest} alt="pinterest" />
      </a>
    </div>
  );
};
