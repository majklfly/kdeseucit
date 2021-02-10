import React from "react";

import amos from "../Pics/amos.jpg";

export const Sloh = () => {
  return (
    <div className="BoxProKarty">
      <a
        href="https://www.youtube.com/channel/UCu3JEcOEWv-eybsibgw2fwQ/playlists"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={amos} alt="samos" />
      </a>
    </div>
  );
};
