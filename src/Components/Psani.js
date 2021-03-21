import React from "react";

import amos from "../Pics/amos.jpg";
import lustenky from "../Pics/lustenky.jpg";
import agata from "../Pics/agata.jpg";
import vcelka from "../Pics/vcelka.jpg";
import boby from "../Pics/boby.jpg";

export const Psani = () => {
  return (
    <div className="BoxProKarty">
      <a href="https://bobyho-skola.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={boby} alt="boby" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCu3JEcOEWv-eybsibgw2fwQ/playlists"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={amos} alt="samos" />
      </a>
      <a href="https://rysava.websnadno.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={lustenky} alt="lustenky" />
      </a>
      <a href="https://nns.cz/agata/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={agata} alt="agata" />
      </a>
      <a href="https://www.vcelka.cz" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={vcelka}
          alt="vcelka"
          title="Včelka je vytvářena odborníky z oblasti vzdělávání, poruch učení a nápravy čtení."
        />
      </a>
    </div>
  );
};
