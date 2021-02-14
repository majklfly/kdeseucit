import React from "react";

import snadhledem from "../Pics/snadhledem.jpg";
import vcelka from "../Pics/vcelka.jpg";
import klett from "../Pics/klett.jpg";

export const Spanelsky = () => {
  return (
    <div className="BoxProKarty">
      <a
        href="https://www.skolasnadhledem.cz/profil/cizi-jazyky/1791-spanelsky-jazyk"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={snadhledem} alt="snadhledem" />
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
        href="https://onlinecviceni.klett.cz/#languageId=11&bookId=31&capitolId=123"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={klett} alt="klett" />
      </a>
    </div>
  );
};
