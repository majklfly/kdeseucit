import React from "react";

import vedanadoma from "../Pics/vedanadoma.jpg";
import vedaliska from "../Pics/vedaliska.jpg";
import rozhlastemata from "../Pics/rozhlastemata.jpg";
import ujc from "../Pics/ujc.jpg";
import code from "../Pics/code.jpg";
import quizlet from "../Pics/quizlet.jpg";
import zcucelozivot from "../Pics/zcucelozivot.jpg";

import skill from "../Pics/skill.jpg";
import ai from "../Pics/ai.jpg";
import grafeditor from "../Pics/grafeditor.jpg";

export const Celozivotnivzdelavani = () => {
  return (
    <div className="BoxProKarty">
        <a
        href="https://www.avcr.cz/cs/pro-verejnost/veda-na-doma/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={vedanadoma} alt="vedanadoma" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCiLdXDvBI6bcd6QCBM4s2Mw"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={vedaliska} alt="vedaliska" />
      </a>
      <a href="https://temata.rozhlas.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={rozhlastemata} alt="rozhlastemata" />
      </a>
      <a href="https://prirucka.ujc.cas.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={ujc} alt="ujc" />
      </a>
      <a href="https://studio.code.org/projects/public" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={code} alt="code" />
      </a>
      <a
        href="https://quizlet.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={quizlet} alt="quizlet" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCQEeFXqM8ugs_7S-fNjxZfQ/videos"         target="_blank"         rel="noreferrer"      >
        <img className="obrazekKarty" src={zcucelozivot} alt="Západočeská univerzita - celoživotní vzdělávání" />
      </a>
      <a
        href="https://www.skillsbuilder.org/homelearning"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={skill} alt="skill" />
      </a>
      <a
        href="https://course.elementsofai.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ai} alt="ai" />
      </a>
      <a
        href="https://www.canva.com/cs_cz/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={grafeditor} alt="grafeditor" />
      </a>
    </div>
  );
};
