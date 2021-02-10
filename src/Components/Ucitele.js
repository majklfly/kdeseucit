import React from "react";

import otevrene from "../Pics/otevrene.jpg";
import zdroje from "../Pics/zdroje.jpg";
import techambition from "../Pics/techambition.jpg";
import ucitelnice from "../Pics/ucitelnice.jpg";
import microsoft from "../Pics/microsoft.jpg";
import clovekvtisni from "../Pics/clovekvtisni.jpg";
import legiokarty from "../Pics/legiokarty.jpg";
import elixir from "../Pics/elixir.jpg";
import zcucelozivot from "../Pics/zcucelozivot.jpg";
import ucitelin from "../Pics/ucitelin.jpg";
import bridge from "../Pics/bridge.jpg";
import codeweek from "../Pics/codeweek.jpg";
import kritickelisty from "../Pics/kritickelisty.jpg";

export const Ucitele = () => {
  return (
    <div className="BoxProKarty">
      <a
        href="https://otevrenevzdelavani.cz/otevrene-zdroje/?fbclid=IwAR3LGKcS447xHBm7huZq-hiXYajBHk9Mc5lJthjIkkEtBqLU-OcP_laDDJU"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={otevrene} alt="otevrene" />
      </a>
      <a href="https://zdroje.guruveskole.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={zdroje} alt="zdroje" />
      </a>
      <a
        href="https://cze-cs.techambition.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={techambition} alt="techambition" />
      </a>
      <a href="https://www.ucitelnice.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={ucitelnice} alt="učitelnice" />
      </a>
      <a
        href="https://education.microsoft.com/cs-cz/resource/1a664892"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={microsoft} alt="microsoft" />
      </a>
      <a
        href="https://www.clovekvtisni.cz/co-delame/vzdelavaci-program-varianty?fbclid=IwAR1npHlcg_tdpsKSOOGmCeCsqLkQgcWUaxp4it2s_HAIH9n46si5-6ZhsEQ"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={clovekvtisni} alt="Člověk v tísni" />
      </a>
      <a href="https://whooshback.com/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={legiokarty}
          alt="Historie v kartách"
        />
      </a>
      <a href="https://www.ucitel-in.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={ucitelin} alt="Učitel IN" />
      </a>
      <a
        href="https://www.elixirdoskol.cz/o-elixiru/#"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={elixir} alt="elixir do škol" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCQEeFXqM8ugs_7S-fNjxZfQ/videos"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={zcucelozivot}
          alt="Západočeská univerzita - celoživotní vzdělávání"
        />
      </a>
      <a href="https://www.bridge-online.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={bridge} alt="Anglické časopisy" />
      </a>
      <a href="https://codeweek.eu/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={codeweek} alt="codeweek" />
      </a>
      <a
        href="https://kritickemysleni.cz/inspirace-pro-ucitele/kriticke-listy/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={kritickelisty} alt="kritickelisty" />
      </a>
    </div>
  );
};
