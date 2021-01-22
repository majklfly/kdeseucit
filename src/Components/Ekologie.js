import React from "react";

import step from "../Pics/step.jpg";
import facebookenviro from "../Pics/facebookenviro.jpg";
import ptaciporadna from "../Pics/ptaciporadna.jpg";
import veronica from "../Pics/veronica.jpg";
import kreslenaveda from "../Pics/kreslenaveda.jpg";

export const Ekologie = () => {
  return (
    <div className="BoxProKarty">
      <a href="http://wiki.ekoporadna.cz" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={step}
          alt="STEP síť ekologických poraden"
        />
      </a>
      <a
        href="https://www.facebook.com/groups/906961889479119/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={facebookenviro}
          alt="Enviromentální výchova a vzdělávání"
        />
      </a>
      <a
        href="https://www.facebook.com/groups/594820014006582/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ptaciporadna} alt="Ptačí poradna" />
      </a>
      <a href="http://www.casopisveronica.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={veronica} alt="veronica" />
      </a>
      <a
        href="https://www.youtube.com/hashtag/nezkreslenaveda"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={kreslenaveda}
          alt="NEZkreslena věda"
        />
      </a>
    </div>
  );
};
