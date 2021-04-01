import React from "react";
import otevrene from "../Pics/otevrene.jpg";

export const Ucebnice = () => {
  return (
    <div className="BoxProKarty">
      <a
        href="https://otevrenevzdelavani.cz/otevrene-zdroje/?fbclid=IwAR3LGKcS447xHBm7huZq-hiXYajBHk9Mc5lJthjIkkEtBqLU-OcP_laDDJU"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={otevrene} alt="otevrene" />
      </a>
    </div>
  );
};
