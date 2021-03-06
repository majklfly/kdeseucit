import React from "react";

import kriticke from "../Pics/kriticke.jpg";
import jedensvet from "../Pics/jedensvet.jpg";
import respektneboli from "../Pics/respektneboli.jpg";
import migrace from "../Pics/migrace.jpg";
import ctedu from "../Pics/ctedu.jpg";
import medialnigramotnost from "../Pics/medialnigramotnost.jpg";
import dezinformace from "../Pics/dezinformace.jpg";
import svetmedii from "../Pics/svetmedii.jpg";
import skolamedii from "../Pics/skolamedii.jpg";
import odyssea from "../Pics/odyssea.jpg";
import muni from "../Pics/muni.jpg";
import ucseonline from "../Pics/ucseonline.jpg";
import filda from "../Pics/filda.jpg";
import studijnisvet from "../Pics/studijnisvet.jpg";

export const ZSV = () => {
  return (
    <div className="BoxProKarty">
      <a href="https://www.trainbra.in/cs/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={kriticke} alt="kriticke" />
      </a>
      <a
        href="https://www.jsns.cz/distancni-vyuka"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={jedensvet} alt="jedensvet" />
      </a>
      <a
        href="http://www.respektneboli.eu/pedagogove/materialy-k-vyuce"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={respektneboli} alt="respektneboli" />
      </a>
      <a href="https://migraceonline.cz/cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={migrace} alt="migrace" />
      </a>
      <a
        href="https://edu.ceskatelevize.cz/predmet/psychologie-a-sociologie"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ctedu} alt="ctedu" />
      </a>
      <a
        href="http://medialnigramotnost.fsv.cuni.cz/zobraz/tema/medialni-obsahy?pos=13,18"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={medialnigramotnost}
          alt="medialnigramotnost"
        />
      </a>
      <a
        href="https://www.irozhlas.cz/zpravy-domov/hra-dezinformace-fake-news-falesne-zpravy_1808310740_zlo"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={dezinformace} alt="dezinformace" />
      </a>
      <a href="http://svetmedii.info/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={svetmedii} alt="svetmedii" />
      </a>
      <a
        href="https://www.skolamedii.cz/metodicky-material/publikace-k-medialni-vychove/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={skolamedii} alt="skolamedii" />
      </a>
      <a href="https://www.ptac.cz/materialy" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={odyssea} alt="odyssea" />
      </a>
      <a href="https://www.trainbra.in/cs/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={kriticke} alt="kriticke" />
      </a>
      <a href="https://www.ucseonline.cz/zsv/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={ucseonline} alt="Uč se online" />
      </a>
      <a href="https://www.em.muni.cz/veda" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={muni}
          alt="Milujeme vědu"
          title="Milujeme vědu - magazín z Masarykovi univerzity"
        />
      </a>
      <a
        href="https://www.youtube.com/c/Filozofick%C3%A1fakultaUniverzityKarlovy/videos"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={filda}
          alt="filda"
          title="Oficiální youtube kanál Filozofické fakulty UK"
        />
      </a>
      <a
        href="https://zsv-maturita.cz/seznam-otazek-ze-spolecenskych-ved/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={studijnisvet} alt="Studijní svět" />
      </a>
    </div>
  );
};
