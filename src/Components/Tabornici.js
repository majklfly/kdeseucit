import React from "react";

import ctedu from "../Pics/ctedu.jpg";
import ddm from "../Pics/ddm.jpg";
import lesy from "../Pics/lesy.jpg";
import ucimesevenku from "../Pics/ucimesevenku.jpg";

export const Tabornici = () => {
  return (
    <div className="BoxProKarty">
      <a
        href="https://edu.ceskatelevize.cz/tema/krajina-a-orientace-v-krajine?predmet=prvouka"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ctedu} alt="ctedu" />
      </a>
      <a
        href="https://mitkamjit.cz/?zamereni=17&vek="
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ddm} alt="ddm" />
      </a>
      <a
        href="https://lesycr.cz/navstevnici-lesa/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={lesy} alt="lesy" />
      </a>
      <a
        href="https://ucimesevenku.cz/stahuji/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ucimesevenku} alt="Učíme se venku" />
      </a>
    </div>
  );
};
