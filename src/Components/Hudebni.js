import React from "react";

import ddm from "../Pics/ddm.jpg";
import kytara from "../Pics/kytara.jpg";
import ctedu from "../Pics/ctedu.jpg";
import testpark from "../Pics/testpark.jpg";
import patrik from "../Pics/patrik.jpg";
import rous from "../Pics/rous.jpg";
import hodinazpevu from "../Pics/hodinazpevu.jpg";
import studijnisvet from "../Pics/studijnisvet.jpg";
import piano333 from "../Pics/piano333.jpg";
import khannew from "../Pics/khannew.jpg";

export const Hudebni = () => {
  return (
    <div className="BoxProKarty">
      <a
        href="https://cs.khanacademy.org/humanities/music"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={khannew} alt="Khanova škola" />
      </a>
      <a
        href="https://mitkamjit.cz/?zamereni=1&vek="
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ddm} alt="ddm" />
      </a>
      <a href="http://www.kytara.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={kytara} alt="kytara" />
      </a>
      <a
        href="https://edu.ceskatelevize.cz/predmet/hudebni-a-pohybove-aktivity"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ctedu} alt="ctedu" />
      </a>
      <a
        href="https://www.youtube.com/playlist?list=PLAHm1JQMiqaTpUuTd5N_rIUWbzPZZjx49"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={hodinazpevu} alt="hodinazpevu" />
      </a>
      <a
        href="https://www.youtube.com/c/pianoman333/videos"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={piano333} alt="piano333" />
      </a>
      <a
        href="https://www.youtube.com/c/PatrikPietschmann/videos"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={patrik} alt="patrik" />
      </a>
      <a
        href="https://www.youtube.com/c/Rousseau/videos"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={rous} alt="rous" />
      </a>
      <a
        href="http://www.testpark.cz/testy/hudba"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={testpark} alt="Test park" />
      </a>
      <a
        href="https://dejiny-online.cz/maturitni-otazky-z-dejin-hudby/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={studijnisvet} alt="Studijní svět" />
      </a>
    </div>
  );
};
