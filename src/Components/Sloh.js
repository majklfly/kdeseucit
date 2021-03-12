import React from "react";

import povidkar from "../Pics/povidkar.jpg";
import pointa from "../Pics/pointa.jpg";
import sotkoviny from "../Pics/sotkoviny.jpg";
import studijnisvet from "../Pics/studijnisvet.jpg";
import khannew from "../Pics/khannew.jpg";

export const Sloh = () => {
  return (
    <div className="BoxProKarty">
      <a
        href="https://www.renenekuda.cz/povidkar/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={povidkar} alt="povidkar" />
      </a>
      <a href="https://www.pointa.cz/landing" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={pointa} alt="pointa" />
      </a>
      <a href="http://www.sotkoviny.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={sotkoviny} alt="sotkoviny" />
      </a>
      <a
        href="https://rozbor-dila.cz/slohove-prace-k-maturite-rozcestnik/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={studijnisvet} alt="Studijní svět" />
      </a>
      <a
        href="https://cs.khanacademy.org/humanities/hass-storytelling"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={khannew} alt="Khanova škola" />
      </a>
    </div>
  );
};
