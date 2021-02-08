import React from "react";

import ddm from "../Pics/ddm.jpg";
import kytara from "../Pics/kytara.jpg";
import ctedu from "../Pics/ctedu.jpg";
import testpark from "../Pics/testpark.jpg";
import patrik from "../Pics/patrik.jpg";

export const Hudebni = () => {
  return (
    <div className="BoxProKarty">
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
        href="https://www.youtube.com/c/PatrikPietschmann/videos"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={patrik} alt="patrik" />
      </a>
      <a
        href="http://www.testpark.cz/testy/hudba"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={testpark} alt="Test park" />
      </a>
    </div>
  );
};
