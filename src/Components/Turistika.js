import React from "react";

import ctedu from "../Pics/ctedu.jpg";
import vojenskelesy from "../Pics/vojenskelesy.jpg";
import sumava from "../Pics/sumava.jpg";
import svycarsko from "../Pics/svycarsko.jpg";
import podyji from "../Pics/podyji.jpg";
import krkonose from "../Pics/krkonose.jpg";
import poodri from "../Pics/poodri.jpg";

export const Turistika = () => {
  return (
    <div className="BoxProKarty">
      <a
        href="https://edu.ceskatelevize.cz/tema/turistika-a-sporty-v-prirode?predmet=vychova-ke-zdravi"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ctedu} alt="ctedu" />
      </a>
      <a href="https://deti.vls.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={vojenskelesy} alt="vojenskelesy" />
      </a>
      <a
        href="https://www.npsumava.cz/navstivte-sumavu/materialy-ke-stazeni/samoobsluzne-pracovni-listy/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={sumava} alt="sumava" />
      </a>
      <a
        href="https://www.npcs.cz/evvopublikace"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={svycarsko} alt="svycarsko" />
      </a>
      <a
        href="https://www.nppodyji.cz/sdetmidoma"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={podyji} alt="podyji" />
      </a>
      <a href="https://www.krnap.cz/brozury/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={krkonose} alt="krkonose" />
      </a>
      <a
        href="https://www.poodri.com/pohadkove-poodri/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={poodri} alt="Pohádkové poodří" />
      </a>
    </div>
  );
};
