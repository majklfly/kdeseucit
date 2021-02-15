import React from "react";

import potravinovezahrady from "../Pics/potravinovezahrady.jpg";
import svycarsko from "../Pics/svycarsko.jpg";
import ucimesevenku from "../Pics/ucimesevenku.jpg";
import facebookenviro from "../Pics/facebookenviro.jpg";
import vmuzeudoma from "../Pics/vmuzeudoma.jpg";

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
        href="https://www.nzm.cz/aktuality/v-muzeu-jako-doma?fbclid=IwAR0wPdIS-WbJGeR2u0orR7ZgtNlFgNYJL_xx95zk6YrQZ3MtdB0jVryJRyg"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={vmuzeudoma}
          alt="V muzeu jako doma"
        />
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
