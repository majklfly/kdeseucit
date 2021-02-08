import React from "react";

import ddm from "../Pics/ddm.jpg";
import ctedu from "../Pics/ctedu.jpg";
import lalijoga from "../Pics/lalijoga.jpg";
import telocvik from "../Pics/telocvik.jpg";
import joginci from "../Pics/joginci.jpg";
import sokol from "../Pics/sokol.jpg";
import army from "../Pics/army.jpg";
import fyzio from "../Pics/fyzio.jpg";
import testpark from "../Pics/testpark.jpg";
import telocvikari from "../Pics/telocvikari.jpg";

export const Sport = () => {
  return (
    <div className="BoxProKarty">
      <a
        href="https://mitkamjit.cz/?zamereni=5&vek="
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ddm} alt="ddm" />
      </a>
      <a
        href="https://edu.ceskatelevize.cz/predmet/vychova-ke-zdravi"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ctedu} alt="ctedu" />
      </a>
      <a
        href="https://www.jogasdetmi.cz/cvicime-s-kouzelnou-skolkou/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={lalijoga} alt="lalijoga" />
      </a>
      <a
        href="https://www.youtube.com/channel/UC64sWJmmNYgM0XdPn8_64mA/videos"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={telocvik} alt="telocvik" />
      </a>
      <a
        href="https://decko.ceskatelevize.cz/joginci"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={joginci} alt="joginci" />
      </a>
      <a
        href="https://www.youtube.com/channel/UC0p4hTTlWP0LgSy0hWculuA/videos"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={sokol} alt="sokol" />
      </a>
      <a
        href="https://www.youtube.com/playlist?list=PLuhJ8-1PdCjx6I8bzA0ZfFJOHkcU0E2wG"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={army} alt="army" />
      </a>
      <a
        href="https://www.fyzioklinika.cz/navody-na-cviceni-vse/boli-me"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={fyzio} alt="fyzio" />
      </a>
      <a
        href="https://www.youtube.com/c/telocvikari/videos"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={telocvikari}
          alt="tělocvikáři.sk"
          title="tělocvikáři.sk"
        />
      </a>
      <a
        href="http://www.testpark.cz/testy/sport"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={testpark} alt="Test park" />
      </a>
    </div>
  );
};
