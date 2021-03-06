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
import redmonster from "../Pics/redmonster.jpg";
import talen from "../Pics/talen.jpg";
import ucimeonline from "../Pics/ucimeonline.jpg";
import nazivo from "../Pics/nazivo.jpg";
import khannew from "../Pics/khannew.jpg";
import kahoot from "../Pics/kahoot.jpg";
import rvp from "../Pics/rvp.jpg";
import damborice from "../Pics/damborice.jpg";

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
      <a href="https://www.redmonster.cz/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={redmonster}
          alt="redmonster"
          title="Online výukové kurzy nejen pro základní a střední školy."
        />
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
        href="https://www.zemmat.cz/pro-kolegy"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={damborice} alt="Dambořice" />
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
      <a href="https://www.talentest.cz/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={talen}
          alt="talen"
          title="Poznej své talenty, vyber školu a povolání"
        />
      </a>
      <a
        href="https://www.ucimeonline.cz/aktivity/technologie-do-skoly/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ucimeonline} alt="ucimeonline" />
      </a>
      <a href="https://www.ucitelnazivo.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={nazivo} alt="nazivo" />
      </a>
      <a
        href="https://cs.khanacademy.org/college-careers-more/learnstorm-growth-mindset-activities-world"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={khannew} alt="Khanova škola" />
      </a>
      <a href="https://kahoot.com/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={kahoot} alt="Kahoot" />
      </a>
      <a href="https://dum.rvp.cz/index.html" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={rvp} alt="rvp" />
      </a>
    </div>
  );
};
