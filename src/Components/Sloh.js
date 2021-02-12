import React from "react";

import povidkar from "../Pics/povidkar.jpg";
import pointa from "../Pics/pointa.jpg";
import sotkoviny from "../Pics/sotkoviny.jpg";

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
    </div>
  );
};
