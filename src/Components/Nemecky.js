import React from "react";

import umimenemecky from "../Pics/umimenemecky.jpg";
import snadhledem from "../Pics/snadhledem.jpg";
import ctedu from "../Pics/ctedu.jpg";
import testpark from "../Pics/testpark.jpg";
import veseledeti2 from "../Pics/veseledeti2.jpg";
import freunde from "../Pics/freunde.jpg";
import nemslov from "../Pics/nemslov.jpg";
import vcelka from "../Pics/vcelka.jpg";
import klett from "../Pics/klett.jpg";
import studijnisvet from "../Pics/studijnisvet.jpg";
import nemcinazdarma from "../Pics/nemcinazdarma.jpg";
import goethe from "../Pics/goethe.jpg";
import bnemcina from "../Pics/bnemcina.jpg";
import nelly from "../Pics/nelly.jpg";
import welle from "../Pics/welle.jpg";

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
        href="https://learngerman.dw.com/en/overview"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={welle} alt="welle" />
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
      <a href="https://www.vcelka.cz" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={vcelka}
          alt="vcelka"
          title="Včelka je vytvářena odborníky z oblasti vzdělávání, poruch učení a nápravy čtení."
        />
      </a>
      <a
        href="https://onlinecviceni.klett.cz/#languageId=8&bookId=24&capitolId=81"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={klett} alt="klett" />
      </a>
      <a
        href="https://studijni-svet.cz/nemcina/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={studijnisvet} alt="Studijní svět" />
      </a>
      <a href="https://nemcina-zdarma.cz/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={nemcinazdarma}
          alt="Němčina zdarma"
        />
      </a>
      <a
        href="http://bfu.goethe.de/a1_sd1/hoeren.php"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={goethe} alt="goethe institut" />
      </a>
      <a
        href="https://www.youtube.com/c/Businessn%C4%9Bm%C4%8Dina/videos"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={bnemcina} alt="bnemcina" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCXSsbWRIlbfXSeb4BKTRVyw/videos"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={nelly} alt="nelly" />
      </a>
    </div>
  );
};
