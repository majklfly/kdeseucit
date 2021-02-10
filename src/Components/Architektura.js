import React from "react";

import pilir from "../Pics/pilir.jpg";
import ctedu from "../Pics/ctedu.jpg";
import a489 from "../Pics/a489.jpg";
import gjf from "../Pics/gjf.jpg";
import bam from "../Pics/bam.jpg";
import zam from "../Pics/zam.jpg";
import lam from "../Pics/lam.jpg";
import kam from "../Pics/kam.jpg";
import pam from "../Pics/pam.jpg";
import mujrozcestnik from "../Pics/mujrozcestnik.jpg";
import mozaik from "../Pics/mozaik.jpg";
import desetstoleti from "../Pics/desetstoleti.jpg";

export const Architektura = () => {
  return (
    <div className="BoxProKarty">
      <a href="https://www.casopispilir.cz/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={pilir}
          alt="pilir"
          title="časopis o architektuře pro učitele a žáky"
        />
      </a>
      <a
        href="https://edu.ceskatelevize.cz/predmet/umeni-a-kultura"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={ctedu}
          alt="ctedu"
          title="Pořady o umění a kultuře"
        />
      </a>
      <a href="https://www.a489.cz/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={a489}
          alt="a489"
          title="Mapování kvalitní české architektury z doby 1948-1989"
        />
      </a>
      <a href="https://www.gjf.cz/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={gjf}
          alt="gjf"
          title="Galerie prezentující současnou architekturu"
        />
      </a>
      <a href="https://www.bam.brno.cz/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={bam}
          alt="bam"
          title="Brněnský architektonický manuál"
        />
      </a>
      <a href="https://zam.zlin.eu/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={zam}
          alt="zam"
          title="Zlínský architektonický manuál"
        />
      </a>
      <a href="https://lam.litomysl.cz/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={lam}
          alt="lam"
          title="Litomyšlský architektonický manuál"
        />
      </a>
      <a href="https://kam.hradcekralove.cz/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={kam}
          alt="kam"
          title="Královéhradecký architektonický manuál"
        />
      </a>
      <a href="https://pam.plzne.cz/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={pam}
          alt="pam"
          title="Plzeňský architektonický manuál"
        />
      </a>
      <a
        href="http://www.veronikapucerova.cz/archanddesignguide.html"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={mujrozcestnik}
          alt="Rozcestník architektury a designu"
          title="Rozcestník architektury a designu"
        />
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
        href="https://www.youtube.com/results?search_query=deset+stoleti+architektury"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={desetstoleti} alt="desetstoleti" />
      </a>
    </div>
  );
};
