import React from "react";

import dezinformace from "../Pics/dezinformace.jpg";
import svetmedii from "../Pics/svetmedii.jpg";
import skolamedii from "../Pics/skolamedii.jpg";
import jedensvet from "../Pics/jedensvet.jpg";
import medialnigramotnost from "../Pics/medialnigramotnost.jpg";
import kriticke from "../Pics/kriticke.jpg";
import odyssea from "../Pics/odyssea.jpg";

export const Medialni = () => {
  return (
    <div className="BoxProKarty">
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
      <a
        href="https://www.jsns.cz/projekty/medialni-vzdelavani"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={jedensvet} alt="jedensvet" />
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
      <a href="https://www.trainbra.in/cs/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={kriticke} alt="kriticke" />
      </a>
      <a href="https://www.ptac.cz/materialy" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={odyssea} alt="odyssea" />
      </a>
    </div>
  );
};
