import React from "react";

import umimenemecky from "../Pics/umimenemecky.jpg";
import snadhledem from "../Pics/snadhledem.jpg";
import ctedu from "../Pics/ctedu.jpg";
import testpark from "../Pics/testpark.jpg";
import veseledeti2 from "../Pics/veseledeti2.jpg";
import freunde from "../Pics/freunde.jpg";
import nemslov from "../Pics/nemslov.jpg";

export const Nemecky = () => {
  return (
    <div className="BoxProKarty">
      <a href="https://www.umimenemecky.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={umimenemecky} alt="umimenemecky" />
      </a>
      <a
        href="https://www.skolasnadhledem.cz/profil/cizi-jazyky/1072-nemecky-jazyk"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={snadhledem} alt="snadhledem" />
      </a>
      <a
        href="https://edu.ceskatelevize.cz/predmet/nemecky-jazyk?stupen=1-stupen-zs"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ctedu} alt="ctedu" />
      </a>
      <a
        href="http://www.testpark.cz/testy/nemcina"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={testpark} alt="testpark" />
      </a>
      <a
        href="https://www.ucenionline.com/jazyky/jazyky/nemecky-jazyk/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={veseledeti2} alt="veseledeti2" />
      </a>
      <a
        href="https://www.hueber.de/cz/beste-freunde/online/uebungen"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={freunde} alt="freunde" />
      </a>
      <a
        href="https://www.hueber.de/seite/pg_lernen_lernwortschatz_cz_bfr"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={nemslov}
          alt="nemslov"
          title="Nahrávky německých slovíček"
        />
      </a>
    </div>
  );
};
