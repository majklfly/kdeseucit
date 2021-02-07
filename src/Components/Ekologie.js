import React from "react";

import step from "../Pics/step.jpg";
import facebookenviro from "../Pics/facebookenviro.jpg";
import ptaciporadna from "../Pics/ptaciporadna.jpg";
import veronica from "../Pics/veronica.jpg";
import kreslenaveda from "../Pics/kreslenaveda.jpg";
import ekoskola from "../Pics/ekoskola.jpg";
import potravinovezahrady from "../Pics/potravinovezahrady.jpg";
import bezobratli from "../Pics/bezobratli.jpg";

export const Ekologie = () => {
  return (
    <div className="BoxProKarty">
      <a href="http://wiki.ekoporadna.cz" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={step}
          alt="STEP síť ekologických poraden"
          title="STEP síť ekologických poraden"
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
          title="Enviromentální výchova a vzdělávání"
        />
      </a>
      <a
        href="https://www.facebook.com/groups/594820014006582/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={ptaciporadna}
          alt="Ptačí poradna"
          title="Ptačí poradna"
        />
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
          title="NEZkreslena věda - Akademie věd, Pavel Liška, Bára Hrzánová a Radek Holub"
        />
      </a>
      <a
        href="http://terezanet.cz/cz/ekoskola"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ekoskola} alt="ekoskola" />
      </a>
      <a
        href="https://www.potravinovezahrady.cz/rubriky/clanky/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={potravinovezahrady}
          alt="potravinovezahrady"
          title="Blog věnovaný permakultuře, zahradničení a semenaření."
        />
      </a>
      <a href="http://www.casopisveronica.cz/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={veronica}
          alt="Zpravodaj ekologického institutu Veronica"
          title="Zpravodaj ekologického institutu Veronica"
        />
      </a>
      <a
        href="https://www.facebook.com/groups/bezobratli/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={bezobratli} alt="bezobratli" />
      </a>
    </div>
  );
};
