import React from "react";

import nabla from "../Pics/nabla.jpg";
import seminarky from "../Pics/seminarky.jpg";
import skolaposkolema from "../Pics/skolaposkolema.jpg";
import cermat from "../Pics/cermat.jpg";
import learntube from "../Pics/learntube.jpg";
import bridge from "../Pics/bridge.jpg";
import ucseonline from "../Pics/ucseonline.jpg";
import hlavy from "../Pics/hlavy.jpg";
import vhlavniroli from "../Pics/vhlavniroli.jpg";
import milujeme from "../Pics/milujeme.jpg";
import studijnisvet from "../Pics/studijnisvet.jpg";
import napotitku from "../Pics/napotitku.jpg";

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
      <a
        href="https://www.ucseonline.cz/maturitni-otazky/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ucseonline} alt="Uč se online" />
      </a>
      <a
        href="https://www.milujemecestinu.cz/maturita-z-cestiny_cs.htm"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={milujeme} alt="Milujeme češtinu" />
      </a>
      <a
        href="https://studijni-svet.cz/predmety/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={studijnisvet} alt="Studijní svět" />
      </a>
      <a
        href="https://www.youtube.com/playlist?list=PL4hnbqNUUmgQTf4yN12PINP0q0QJFInxa"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={hlavy}
          alt="hlavy"
          title="Rozbory literárních děl k maturitě"
        />
      </a>
      <a
        href="https://www.youtube.com/c/Napot%C3%ADtku/videos"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={napotitku} alt="napotitku" />
      </a>
      <a
        href="https://www.mestskadivadlaprazska.cz/vzdelavani/maturita/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={vhlavniroli}
          alt="vhlavniroli"
          title="V hlavní roli maturita - Městská divadla pražská"
        />
      </a>
    </div>
  );
};
