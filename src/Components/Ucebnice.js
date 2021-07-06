import React from "react";
import otevrene from "../Pics/otevrene.jpg";
import ucebnicecteni from "../Pics/ucebnicecteni.jpg";
import ucebniceprvouka from "../Pics/ucebniceprvouka.jpg";
import ucebnicema from "../Pics/ucebnicema.jpg";
import ucebnicecj from "../Pics/ucebnicecj.jpg";
import nscitanka from "../Pics/nscitanka.jpg";
import ucebnicepr from "../Pics/ucebnicepr.jpg";
import ucebnicevl from "../Pics/ucebnicevl.jpg";
import ucebnicede from "../Pics/ucebnicede.jpg";
import ucebniceze from "../Pics/ucebniceze.jpg";
import ucebniceche from "../Pics/ucebniceche.jpg";
import ucebniceprpis from "../Pics/ucebniceprpis.jpg";
import bridge from "../Pics/bridge.jpg";

export const Ucebnice = () => {
  return (
    <div className="BoxProKarty">
      <a
        href="https://novaskoladuha.cz/certifikaty/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ucebnicecteni} alt="ucebnicecteni" />
      </a>
      <a
        href="https://novaskoladuha.cz/certifikaty/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={ucebniceprvouka}
          alt="ucebniceprvouka"
        />
      </a>
      <a
        href="https://novaskoladuha.cz/certifikaty/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ucebnicecj} alt="ucebnicecj" />
      </a>
      <a
        href="https://novaskoladuha.cz/certifikaty/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ucebnicema} alt="ucebnicema" />
      </a>
      <a
        href="https://novaskoladuha.cz/certifikaty/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={nscitanka} alt="nscitanka" />
      </a>
      <a
        href="https://novaskoladuha.cz/certifikaty/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ucebnicepr} alt="ucebnicepr" />
      </a>
      <a
        href="https://novaskoladuha.cz/certifikaty/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ucebnicevl} alt="ucebnicevl" />
      </a>
      <a
        href="https://novaskoladuha.cz/certifikaty/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ucebnicede} alt="ucebnicede" />
      </a>
      <a
        href="https://novaskoladuha.cz/certifikaty/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ucebniceze} alt="ucebniceze" />
      </a>
      <a
        href="https://novaskoladuha.cz/certifikaty/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ucebniceche} alt="ucebniceche" />
      </a>
      <a
        href="https://novaskoladuha.cz/certifikaty/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ucebniceprpis} alt="ucebniceprpis" />
      </a>
      <a href="https://www.bridge-online.cz/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={bridge}
          alt="Anglické časopisy a učebnice"
        />
      </a>
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
