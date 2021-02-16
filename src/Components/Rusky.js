import React from "react";

import snadhledem from "../Pics/snadhledem.jpg";
import klett from "../Pics/klett.jpg";
import studijnisvet from "../Pics/studijnisvet.jpg";

export const Rusky = () => {
  return (
    <div className="BoxProKarty">
      <a
        href="https://www.skolasnadhledem.cz/profil/cizi-jazyky/1130-rusky-jazyk"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={snadhledem} alt="snadhledem" />
      </a>
      <a
        href="https://onlinecviceni.klett.cz/#languageId=10&bookId=26&capitolId=90"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={klett} alt="klett" />
      </a>
      <a
        href="https://studijni-svet.cz/rusky-jazyk-maturitni-otazky/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={studijnisvet} alt="Studijní svět" />
      </a>
    </div>
  );
};
