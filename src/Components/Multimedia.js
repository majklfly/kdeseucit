import React from "react";

import ctedu from "../Pics/ctedu.jpg";
import ddm from "../Pics/ddm.jpg";
import sumo from "../Pics/sumo.jpg";
import zefrank from "../Pics/zefrank.jpg";
import photofunia from "../Pics/photofunia.jpg";
import fluid from "../Pics/fluid.jpg";
import dyne from "../Pics/dyne.jpg";
import grafeditor from "../Pics/grafeditor.jpg";
import quizlet from "../Pics/quizlet.jpg";
import ajtak from "../Pics/ajtak.jpg";
import code from "../Pics/code.jpg";
import scratch from "../Pics/scratch.jpg";
import wix from "../Pics/wix.jpg";

export const Multimedia = () => {
  return (
    <div className="BoxProKarty">
      <a
        href="https://edu.ceskatelevize.cz/predmet/ict"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ctedu} alt="ctedu" />
      </a>
      <a
        href="https://mitkamjit.cz/?zamereni=2&vek="
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ddm} alt="ddm" />
      </a>
      <a
        href="https://www.sumopaint.com/paint/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={sumo} alt="sumo" />
      </a>
      <a
        href="http://www.zefrank.com/flowers/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={zefrank} alt="zefrank" />
      </a>
      <a href="https://photofunia.com/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={photofunia} alt="photofunia" />
      </a>
      <a
        href="https://www.escapemotions.com/community/experiments/fluid_painter/index.php"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={fluid} alt="fluid" />
      </a>
      <a
        href="https://www.theoworlds.com/halloween/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={dyne} alt="dyne" />
      </a>
      <a href="https://www.canva.com/cs_cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={grafeditor} alt="grafeditor" />
      </a>
      <a href="https://quizlet.com/en-gb" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={quizlet} alt="quizlet" />
      </a>
      <a
        href="https://www.czechitas.cz/cs/blog/zaciname-s-it/naprogramuj-si-vlastni-hru"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={ajtak}
          alt="ajtak"
          title="Naprogramuj si vlastní hru"
        />
      </a>
      <a
        href="https://studio.code.org/projects/public"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={code} alt="code" />
      </a>
      <a href="https://scratch.mit.edu/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={scratch}
          alt="scratch"
          title="Vytvoř si jednoduchou animaci nebo video."
        />
      </a>
      <a href="https://cs.wix.com/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={wix}
          alt="wix"
          title="Vytvoř si vlastní webové stránky"
        />
      </a>
    </div>
  );
};
