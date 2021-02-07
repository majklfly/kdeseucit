import React from "react";

import nabla from "../Pics/nabla.jpg";
import seminarky from "../Pics/seminarky.jpg";
import skolaposkolema from "../Pics/skolaposkolema.jpg";
import cermat from "../Pics/cermat.jpg";
import learntube from "../Pics/learntube.jpg";
import bridge from "../Pics/bridge.jpg";

export const Maturita = () => {
  return (
    <div className="BoxProKarty">
      <a href="http://www.nabla.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={nabla} alt="nabla" />
      </a>
      <a
        href="http://www.seminarky.cz/maturitni-otazky"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={seminarky} alt="seminarky" />
      </a>
      <a
        href="https://skolaposkole.cz/maturita"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={skolaposkolema}
          alt="skolaposkolema"
        />
      </a>
      <a href="https://prijimacky.cermat.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={cermat} alt="cermat" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCOCsqf9KoHNAuCj_5iVR6sA/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={learntube} alt="learntube" />
      </a>
      <a
        href="https://www.bridge-online.cz/maturitni-temata/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={bridge} alt="Anglické časopisy" />
      </a>
    </div>
  );
};
