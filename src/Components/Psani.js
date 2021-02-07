import React from "react";

import amos from "../Pics/amos.jpg";
import lustenky from "../Pics/lustenky.jpg";
import agata from "../Pics/agata.jpg";

export const Psani = () => {
  return (
    <div className="BoxProKarty">
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
    </div>
  );
};
