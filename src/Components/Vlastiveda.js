import React from "react";

import skolakov from "../Pics/skolakov.jpg";
import lustenky from "../Pics/lustenky.jpg";
import georgina from "../Pics/georgina.jpg";
import snadhledem from "../Pics/snadhledem.jpg";
import ctedu from "../Pics/ctedu.jpg";
import pudding from "../Pics/pudding.jpg";

export const Vlastiveda = () => {
  return (
    <div className="BoxProKarty">
      <a href="https://skolakov.eu/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={skolakov} alt="skolakov" />
      </a>
      <a href="https://rysava.websnadno.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={lustenky} alt="Luštěnky" />
      </a>
      <a href="https://www.geograf.in/cs/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={georgina} alt="Georgina" />
      </a>
      <a
        href="https://www.skolasnadhledem.cz/profil/1-stupen/1587-spolecnost-clovek-a-jeho-svet"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={snadhledem}
          alt="Škola s nadhledem"
        />
      </a>
      <a
        href="https://edu.ceskatelevize.cz/predmet/prirodoveda-vlastiveda"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ctedu} alt="ČT edu" />
      </a>
      <a
        href="https://pudding.cool/2018/10/city_3d/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={pudding} alt="pudding" />
      </a>
    </div>
  );
};
