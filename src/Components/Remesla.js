import React from "react";

import ddm from "../Pics/ddm.jpg";
import krokotak from "../Pics/krokotak.jpg";
import juch from "../Pics/juch.jpg";
import napady from "../Pics/napady.jpg";
import hello from "../Pics/hello.jpg";
import ctedu from "../Pics/ctedu.jpg";
import pinterest from "../Pics/pinterest.jpg";
import cvrcek from "../Pics/cvrcek.jpg";
import testovano from "../Pics/testovano.jpg";

export const Remesla = () => {
  return (
    <div className="BoxProKarty">
      <a
        href="https://mitkamjit.cz/?zamereni=8&vek="
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ddm} alt="ddm" />
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
        href="https://edu.ceskatelevize.cz/predmet/vytvarne-aktivity"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ctedu} alt="ctedu" />
      </a>
      <a href="https://cz.pinterest.com/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={pinterest} alt="pinterest" />
      </a>
      <a href="http://www.sikovny-cvrcek.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={cvrcek} alt="cvrcek" />
      </a>
      <a
        href="https://www.testovanonadetech.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={testovano} alt="testovano" />
      </a>
    </div>
  );
};
