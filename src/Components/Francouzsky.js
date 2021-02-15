import React from "react";

import snadhledem from "../Pics/snadhledem.jpg";
import ctedu from "../Pics/ctedu.jpg";
import tvmonde from "../Pics/tvmonde.jpg";
import clic from "../Pics/clic.jpg";
import hugo from "../Pics/hugo.jpg";
import facile from "../Pics/facile.jpg";
import phonetique from "../Pics/phonetique.jpg";
import topito from "../Pics/topito.jpg";
import fraudio from "../Pics/fraudio.jpg";

export const Francouzsky = () => {
  return (
    <div className="BoxProKarty">
      <a
        href="https://www.skolasnadhledem.cz/profil/cizi-jazyky/1214-francouzsky-jazyk"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={snadhledem} alt="snadhledem" />
      </a>
      <a
        href="https://edu.ceskatelevize.cz/predmet/francouzsky-jazyk"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ctedu} alt="ctedu" />
      </a>
      <a
        href="https://apprendre.tv5monde.com/fr"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={tvmonde}
          alt="tvmonde"
          title="frankofonní televize s interaktivními cvičeními (2. stupeň a výše)"
        />
      </a>
      <a
        href="http://www.cndp.fr/crdp-dijon/-Clic-images-.html"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={clic}
          alt="clic"
          title="Francouzský obrázkový slovníček"
        />
      </a>
      <a href="https://www.hugolescargot.com/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={hugo}
          alt="hugo"
          title="Francouzská stránka s úkoly pro nejmenší děti"
        />
      </a>
      <a
        href="https://www.francaisfacile.com/index.php"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={facile}
          alt="Francais Facile"
          title="Interaktivní cvičení na většinu témat z gramatiky (2. stupeň a výše)"
        />
      </a>
      <a href="http://phonetique.free.fr/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={phonetique}
          alt="phonetique"
          title="výslovnost - prezentace fonémů, aktivity na jejich rozlišení, jazykolamy (všechny úrovně)"
        />
      </a>
      <a
        href="https://www.topito.com/tag/meme"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={topito}
          alt="topito"
          title="Meme ve francouzštině - středoškoláci a výše"
        />
      </a>
      <a
        href="http://www.litteratureaudio.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={fraudio}
          alt="fraudio"
          title="literatura k poslechu a čtení (SŠ a výše)"
        />
      </a>
    </div>
  );
};
