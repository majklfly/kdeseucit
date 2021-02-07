import React from "react";

import matematikacz from "../Pics/matematikacz.jpg";
import maprokazdeho from "../Pics/maprokazdeho.jpg";
import encyklopediefyziky from "../Pics/encyklopediefyziky.jpg";
import ematematika from "../Pics/ematematika.jpg";
import seminarky from "../Pics/seminarky.jpg";
import vedanadoma from "../Pics/vedanadoma.jpg";
import tydenvedy from "../Pics/tydenvedy.jpg";
import rozhlastemata from "../Pics/rozhlastemata.jpg";
import geogebra from "../Pics/geogebra.jpg";
import ujc from "../Pics/ujc.jpg";
import skolamedii from "../Pics/skolamedii.jpg";
import skill from "../Pics/skill.jpg";
import ai from "../Pics/ai.jpg";

export const Vyssistupne = () => {
  return (
    <div className="BoxProKarty">
      <a
        href="https://matematika.cz/matematika-pro-vysoke-skoly"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={matematikacz} alt="matematikacz" />
      </a>
      <a
        href="https://www.maths.cz/clanek/kategorie/17"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={maprokazdeho} alt="maprokazdeho" />
      </a>
      <a href="http://fyzika.jreichl.com/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={encyklopediefyziky}
          alt="encyklopediefyziky"
        />
      </a>
      <a
        href="https://www.e-matematika.cz/vysoke-skoly/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ematematika} alt="ematematika" />
      </a>
      <a href="http://www.seminarky.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={seminarky} alt="seminarky" />
      </a>
      <a
        href="https://www.avcr.cz/cs/pro-verejnost/veda-na-doma/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={vedanadoma} alt="vedanadoma" />
      </a>
      <a
        href="https://www.tydenvedy.cz/festival/best-of-tvt/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={tydenvedy} alt="tydenvedy" />
      </a>
      <a href="https://temata.rozhlas.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={rozhlastemata} alt="rozhlastemata" />
      </a>
      <a
        href="https://www.geogebra.org/t/math"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={geogebra} alt="geogebra" />
      </a>
      <a href="https://prirucka.ujc.cas.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={ujc} alt="ujc" />
      </a>
      <a
        href="https://www.skolamedii.cz/metodicky-material/publikace-k-medialni-vychove/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={skolamedii} alt="skolamedii" />
      </a>
      <a
        href="https://www.skillsbuilder.org/homelearning"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={skill} alt="skill" />
      </a>
      <a
        href="https://course.elementsofai.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ai} alt="ai" />
      </a>
    </div>
  );
};
