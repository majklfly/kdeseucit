import React from "react";
import { Link } from "react-router-dom";

import umimematiku from "../Pics/umimematiku.jpg";
import umimecesky from "../Pics/umimecesky.jpg";
import umimeanglicky from "../Pics/umimeanglicky.jpg";
import umimenemecky from "../Pics/umimenemecky.jpg";
import umimefakta from "../Pics/umimefakta.jpg";
import umimeprogramovat from "../Pics/umimeprogramovat.jpg";
import gretka from "../Pics/gretka.jpg";
import zlatka from "../Pics/zlatka.jpg";
import georgina from "../Pics/georgina.jpg";
import snadhledem from "../Pics/snadhledem.jpg";
import kriticke from "../Pics/kriticke.jpg";
import encyklopediefyziky from "../Pics/encyklopediefyziky.jpg";
import matematikacz from "../Pics/matematikacz.jpg";
import dejepis from "../Pics/dejepis.jpg";
import efyzika from "../Pics/efyzika.jpg";
import maprokazdeho from "../Pics/maprokazdeho.jpg";
import ematematika from "../Pics/ematematika.jpg";
import nabla from "../Pics/nabla.jpg";
import realisticky from "../Pics/realisticky.jpg";
import ctedu from "../Pics/ctedu.jpg";
import math4u from "../Pics/math4u.jpg";
import rozhlasctenar from "../Pics/rozhlasctenar.jpg";
import skolaposkoless from "../Pics/skolaposkoless.jpg";
import seminarky from "../Pics/seminarky.jpg";
import fykos from "../Pics/fykos.jpg";
import geogebra from "../Pics/geogebra.jpg";
import rozhlastemata from "../Pics/rozhlastemata.jpg";
import vedanadoma from "../Pics/vedanadoma.jpg";
import vedaliska from "../Pics/vedaliska.jpg";
import chemix from "../Pics/chemix.jpg";
import kombinatorika from "../Pics/kombinatorika.jpg";
import tydenvedy from "../Pics/tydenvedy.jpg";
import kladivo from "../Pics/kladivo.jpg";
import ujc from "../Pics/ujc.jpg";
import d21 from "../Pics/d21.jpg";
import svetmedii from "../Pics/svetmedii.jpg";
import jedensvet from "../Pics/jedensvet.jpg";
import quizlet from "../Pics/quizlet.jpg";
import skill from "../Pics/skill.jpg";
import ai from "../Pics/ai.jpg";
import elektronika from "../Pics/elektronika.jpg";
import eduskop from "../Pics/eduskop.jpg";
import prvky from "../Pics/prvky.jpg";
import badatelna from "../Pics/badatelna.jpg";
import animacematika from "../Pics/animacematika.jpg";
import animacechemie from "../Pics/animacechemie.jpg";
import animacefyziky from "../Pics/animacefyziky.jpg";
import animacebigola from "../Pics/animacebigola.jpg";
import autoskola from "../Pics/autoskola.jpg";
import timixi from "../Pics/timixi.jpg";
import mozaik from "../Pics/mozaik.jpg";
import ucseonline from "../Pics/ucseonline.jpg";
import filda from "../Pics/filda.jpg";
import pametnaroda from "../Pics/pametnaroda.jpg";
import zav from "../Pics/zav.jpg";
import geometrie from "../Pics/geometrie.jpg";
import lumik from "../Pics/lumik.jpg";

export const Stredni = () => {
  return (
    <div className="BoxProKarty">
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <Link className="sectionButtonLink" to="/maturita">
          <h3 className="sectionButtonCards">MATURITNÍ PŘÍPRAVA</h3>
        </Link>
        <a className="sectionButtonLink" href="https://najdiedu.cz/">
          <h3 className="sectionButtonCards">VYHLEDÁVÁNÍ ŠKOL</h3>
        </a>
      </div>
      <a href="https://www.umimematiku.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={umimematiku} alt="umimematiku" />
      </a>
      <a href="https://www.umimecesky.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={umimecesky} alt="umimecesky" />
      </a>
      <a href="https://www.umimeanglicky.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={umimeanglicky} alt="umimeanglicky" />
      </a>
      <a href="https://www.umimenemecky.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={umimenemecky} alt="umimenemecky" />
      </a>
      <a href="https://www.umimefakta.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={umimefakta} alt="umimefakta" />
      </a>
      <a
        href="https://www.umimeprogramovat.cz/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={umimeprogramovat}
          alt="umimeprogramovat"
        />
      </a>
      <a href="https://www.gramar.in/cs/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={gretka} alt="gretka" />
      </a>
      <a href="https://www.zlatka.in/cs/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={zlatka} alt="zlatka" />
      </a>
      <a href="https://www.geograf.in/cs/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={georgina} alt="georgina" />
      </a>
      <a
        href="https://www.skolasnadhledem.cz/profil/prehled"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={snadhledem} alt="snadhledem" />
      </a>
      <a href="https://www.trainbra.in/cs/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={kriticke} alt="kriticke" />
      </a>
      <a href="http://fyzika.jreichl.com/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={encyklopediefyziky}
          alt="encyklopediefyziky"
        />
      </a>
      <a
        href="https://matematika.cz/matematika-polopatehttps://matematika.cz/matematika-pro-stredni-skoly"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={matematikacz} alt="matematikacz" />
      </a>
      <a href="https://www.dejepis.com/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={dejepis} alt="dejepis" />
      </a>
      <a href="https://www.e-fyzika.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={efyzika} alt="efyzika" />
      </a>
      <a href="http://chemweb.lumika.cz/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={lumik}
          alt="lumik"
          title="Zápisky gymnaziální chemie"
        />
      </a>
      <a
        href="https://vypravej.pametnaroda.cz/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={pametnaroda}
          alt="Paměť národa"
          title="Paměť národa"
        />
      </a>
      <a
        href="https://www.maths.cz/clanek/kategorie/1"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={maprokazdeho} alt="maprokazdeho" />
      </a>
      <a
        href="https://www.e-matematika.cz/stredni-skoly/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ematematika} alt="ematematika" />
      </a>
      <a href="http://www.nabla.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={nabla} alt="nabla" />
      </a>
      <a
        href="http://www.realisticky.cz/ucebnice.php?id=4"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={realisticky} alt="realisticky" />
      </a>
      <a
        href="http://michalheczko.cz/geometrie/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={geometrie} alt="geometrie" />
      </a>
      <a
        href="https://edu.ceskatelevize.cz/stupen-vzdelani/stredni-skola"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ctedu} alt="ctedu" />
      </a>
      <a
        href="http://www.prvky.com/periodicka-tabulka.html"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={prvky} alt="Prvky" />
      </a>
      <a href="http://math4u.vsb.cz/cs" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={math4u} alt="math4u" />
      </a>
      <a
        href="https://www.youtube.com/user/ScienceMuni/videos"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={badatelna} alt="badatelna" />
      </a>
      <a
        href="https://temata.rozhlas.cz/ctenarskydenik"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={rozhlasctenar} alt="rozhlasctenar" />
      </a>
      <a
        href="https://skolaposkole.cz/matematika-ss"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={skolaposkoless}
          alt="skolaposkoless"
        />
      </a>
      <a href="http://www.seminarky.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={seminarky} alt="seminarky" />
      </a>
      <a
        href="https://fykos.cz/o-nas/co-je-fykos"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={fykos} alt="fykos" />
      </a>
      <a
        href="https://www.geogebra.org/t/math"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={geogebra} alt="geogebra" />
      </a>

      <a href="https://temata.rozhlas.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={rozhlastemata} alt="rozhlastemata" />
      </a>
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
      <a href="https://chemix.org/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={chemix} alt="chemix" />
      </a>
      <a
        href="http://michalheczko.cz/kombinatorika/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={kombinatorika} alt="kombinatorika" />
      </a>
      <a
        href="https://www.tydenvedy.cz/festival/best-of-tvt/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={tydenvedy} alt="tydenvedy" />
      </a>
      <a
        href="https://www.youtube.com/user/VedeckeKladivo/videos"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={kladivo} alt="kladivo" />
      </a>
      <a href="https://prirucka.ujc.cas.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={ujc} alt="ujc" />
      </a>
      <a
        href="http://www.dejepis21.cz/dejepis-v-21-stoleti"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={d21} alt="d21" />
      </a>
      <a href="http://svetmedii.info/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={svetmedii} alt="svetmedii" />
      </a>
      <a
        href="https://www.jsns.cz/distancni-vyuka"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={jedensvet} alt="jedensvet" />
      </a>
      <a href="https://quizlet.com/" target="_blank" rel="noreferrer">
        <img
          className="obrazekKarty"
          src={quizlet}
          alt="quizlet"
          title="Vytvoř si kvíz!"
        />
      </a>
      <a
        href="https://www.ucseonline.cz/zapisky-z-hodin/ucetnictvi/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ucseonline} alt="Uč se online" />
      </a>
      <a
        href="https://phet.colorado.edu/cs/simulations/filter?subjects=physics&type=html&sort=alpha&view=grid"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={animacefyziky}
          alt="Animace fyzikálních jevů"
          title="Animace fyzikálních jevů"
        />
      </a>
      <a
        href="https://phet.colorado.edu/cs/simulations/filter?subjects=biology,earth-science&type=html&sort=alpha&view=grid"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={animacebigola}
          alt="Animace biologických jevů"
          title="Animace biologických jevů"
        />
      </a>
      <a
        href="https://phet.colorado.edu/cs/simulations/filter?subjects=chemistry&type=html&sort=alpha&view=grid"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={animacechemie}
          alt="Animace chemických jevů"
          title="Animace chemických jevů"
        />
      </a>
      <a
        href="https://phet.colorado.edu/cs/simulations/filter?subjects=math&type=html&sort=alpha&view=grid"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={animacematika}
          alt="Animace matematických jevů"
          title="Animace matematických jevů"
        />
      </a>
      <a
        href="http://www.zav.cz/download-vyuka-psani-na-klavesnici"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={zav} alt="zav" />
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
        href="https://www.youtube.com/channel/UCjcbcxEgXfkll9tD_1bdeaQ/videos"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={elektronika} alt="elektronika" />
      </a>
      <a href="https://eduskop.cz/courses" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={eduskop} alt="Eduskop" />
      </a>
      <a
        href="https://www.bezpecnecesty.cz/cz/autoskola"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={autoskola} alt="Autoškola" />
      </a>
      <a
        href="https://www.timixi.com/select?order=2&order_type=desc"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={timixi}
          alt="timixi"
          title="Učení se souvislostí pomocí časových os."
        />
      </a>
      <a
        href="https://www.mozaweb.com/cs/lexikon.php?cmd=getlist&let=VIDEO&active_menu=video"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={mozaik}
          alt="mozaik"
          title="3D modely a prezentace"
        />
      </a>
      <a
        href="https://www.youtube.com/c/Filozofick%C3%A1fakultaUniverzityKarlovy/videos"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={filda}
          alt="filda"
          title="Oficiální youtube kanál Filozofické fakulty UK"
        />
      </a>
    </div>
  );
};
