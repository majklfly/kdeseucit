import React from "react";

import snadhledem from "../Pics/snadhledem.jpg";

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
    </div>
  );
};
