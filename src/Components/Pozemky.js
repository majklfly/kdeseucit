import React from "react";

import potravinovezahrady from "../Pics/potravinovezahrady.jpg";
import svycarsko from "../Pics/svycarsko.jpg";
import ucimesevenku from "../Pics/ucimesevenku.jpg";
import facebookenviro from "../Pics/facebookenviro.jpg";

export const Pozemky = () => {
  return (
    <div className="BoxProKarty">
      <a
        href="https://www.npcs.cz/evvopublikace"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={svycarsko} alt="svycarsko" />
      </a>
      <a
        href="https://ucimesevenku.cz/stahuji/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ucimesevenku} alt="Učíme se venku" />
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
    </div>
  );
};
