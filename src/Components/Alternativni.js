import React from "react";

import matikain from "../Pics/matikain.jpg";
import marche from "../Pics/marche.jpg";
import skolasnu from "../Pics/skolasnu.jpg";
import hello from "../Pics/hello.jpg";
import timixi from "../Pics/timixi.jpg";
import ucimesevenku from "../Pics/ucimesevenku.jpg";
import atlas from "../Pics/atlas.jpg";
import projektovevyucovani from "../Pics/projektovevyucovani.jpg";
import mozaik from "../Pics/mozaik.jpg";
import testovanoiq from "../Pics/testovanoiq.jpg";

export const Alternativni = () => {
  return (
    <div className="BoxProKarty">
      <a href="https://www.matika.in/cs/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={matikain} alt="matikain" />
      </a>
      <a
        href="https://drive.google.com/drive/folders/1j_lIpugdMDxuY8ZHW3okzWA5PrjFR6CG?fbclid=IwAR0SLshuuzCKz0o1-aj9xyOh5FbkfIQn_qsRWp40Qj3TI-ngZzjVKjmQYeQ"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={marche} alt="Marché Montessori" />
      </a>
      <a
        href="https://www.ceskatelevize.cz/porady/10267570807-skola-snu/dily/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={skolasnu} alt="Škola snů" />
      </a>
      <a
        href="https://www.hellowonderful.co/category/learn/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={hello} alt="Hello Wonderful" />
      </a>
      <a
        href="https://ucimesevenku.cz/stahuji/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ucimesevenku} alt="Učíme se venku" />
      </a>
      <a href="https://atlas.mapy.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={atlas} alt="Atlas světa" />
      </a>
      <a
        href="https://www.timixi.com/select?order=2&order_type=desc"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={timixi}
          alt="timixi"
          title="Učení se souvislostí pomocí časových os."
        />
      </a>
      <a href="http://www.projektovavyuka.cz/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={projektovevyucovani}
          alt="projektovevyucovani"
        />
      </a>
      <a
        href="https://www.mozaweb.com/cs/lexikon.php?cmd=getlist&let=VIDEO&active_menu=video"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={mozaik}
          alt="mozaik"
          title="3D modely a prezentace"
        />
      </a>
      <a
        href="https://www.testovanonadetech.com/kategorie/iq-hry"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={testovanoiq} alt="testovanoiq" />
      </a>
    </div>
  );
};
