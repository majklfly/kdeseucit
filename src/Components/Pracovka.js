import React from "react";

import ddm from "../Pics/ddm.jpg";
import krokotak from "../Pics/krokotak.jpg";
import juch from "../Pics/juch.jpg";
import napady from "../Pics/napady.jpg";
import hello from "../Pics/hello.jpg";
import ctedu from "../Pics/ctedu.jpg";
import pinterest from "../Pics/pinterest.jpg";
import canva from "../Pics/canva.jpg";
import village from "../Pics/village.jpg";
import vmuzeudoma from "../Pics/vmuzeudoma.jpg";

export const Pracovka = () => {
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
        href="https://www.nzm.cz/aktuality/v-muzeu-jako-doma?fbclid=IwAR0wPdIS-WbJGeR2u0orR7ZgtNlFgNYJL_xx95zk6YrQZ3MtdB0jVryJRyg"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={vmuzeudoma}
          alt="V muzeu jako doma"
        />
      </a>
      <a href="http://krokotak.com/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={krokotak} alt="krokotak" />
      </a>
      <a
        href="http://www.juchuuu.cz/stahovani/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={juch} alt="juchuuu" />
      </a>
      <a
        href="https://www.napadyproanicku.cz/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={napady} alt="Nápady pro Aničku" />
      </a>
      <a
        href="https://www.hellowonderful.co/category/create/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={hello} alt="Hello Wonderul" />
      </a>
      <a
        href="https://edu.ceskatelevize.cz/predmet/vytvarne-aktivity"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ctedu} alt="ČTedu" />
      </a>
      <a href="https://cz.pinterest.com/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={pinterest} alt="pinterest" />
      </a>
      <a href="https://www.canva.com/cs_cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={canva} alt="Grafický editor Canva" />
      </a>
      <a
        href="https://www.activityvillage.co.uk"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={village} alt="Activity village" />
      </a>
    </div>
  );
};
