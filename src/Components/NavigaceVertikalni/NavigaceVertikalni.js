import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./NavigaceVertikalni.css";

import { CustomAccordion as Accordion } from "./Accordion";
import { Context } from "../../Screens/Layout/Context";

const predmety = {
  cestina: "ČESKÝ JAZYK",
  literatura: "ČTENÍ * LITERATURA",
  psani: "PSANÍ",
  matematika: "MATEMATIKA",
  prvouka: "PRVOUKA",
  vlastiveda: "VLASTIVĚDA",
  prirodoveda: "PŘÍRODOVĚDA",
  informatika: "INFORMATIKA",
  zemepis: "ZEMĚPIS",
  prirodopis: "PŘÍRODOPIS BIOLOGIE",
  dejepis: "DĚJEPIS",
  chemie: "CHEMIE",
  fyzika: "FYZIKA",
  ekologie: "EKOLOGICKÁ VÝCHOVA",
  obcanka: "OBČANSKÁ VÝCHOVA",
  rodinka: "RODINNÁ VÝCHOVA",
  pracovka: "PRACOVNÍ VÝCHOVA",
  pozemky: "PĚSTITELSKÉ PRÁCE",
  zsv: "SPOLEČENSKÉ VĚDY",
  medialni: "MEDIÁLNÍ GRAMOTNOST",
};

const jazyky = {
  anglicky: "ANGLICKÝ JAZYK",
  nemecky: "NĚMECKÝ JAZYK",
  francouzsky: "FRANCOUZSKÝ JAZYK",
  spanelsky: "ŠPANĚLSKÝ JAZYK",
  rusky: "RUSKÝ JAZYK",
};

const umelecke = {
  hudebni: "HUDEBNÍ",
  vytvarne: "VÝTVARNÉ",
  multimedialni: "MULTIMEDIALNÍ",
  architektura: "ARCHITEKTURA",
  remesla: "TVOŘENÍ A ŘEMESLA",
  design: "DESIGN",
};

const pohyb = {
  sport: "SPORT",
  tanec: "TANEC",
  divadlo: "DIVADLO",
  tabornici: "TÁBOROVÉ HRY",
  turistika: "TURISTIKA",
};

export const NavigaceVertikalni = () => {
  const { expanded, setExpanded } = useContext(Context);

  return (
    <div className="NavigaceVertikalniKontejner">
      <Accordion
        i={0}
        expanded={expanded}
        setExpanded={setExpanded}
        title="ŠKOLNÍ PŘEDMĚTY"
        buttons={predmety}
      />
      <Accordion
        i={1}
        expanded={expanded}
        setExpanded={setExpanded}
        title="CIZÍ JAZYKY"
        buttons={jazyky}
      />
      <Link
        to="/alternativni"
        onClick={() => window.location.reload()}
        style={{ textDecoration: "none" }}
      >
        <Accordion
          i={2}
          expanded={expanded}
          setExpanded={setExpanded}
          title="ALTERNATIVNÍ"
          closeTabs={true}
        />
      </Link>
      <Link
        to="/rozsirujici"
        onClick={() => window.location.reload()}
        style={{ textDecoration: "none" }}
      >
        <Accordion
          i={3}
          expanded={expanded}
          setExpanded={setExpanded}
          title="ROZŠIŘUJÍCÍ UČIVO"
        />
      </Link>
      <Accordion
        i={4}
        expanded={expanded}
        setExpanded={setExpanded}
        title="UMĚLECKÉ PŘEDMĚTY"
        buttons={umelecke}
      />
      <Accordion
        i={5}
        expanded={expanded}
        setExpanded={setExpanded}
        title="POHYBOVÉ AKTIVITY"
        buttons={pohyb}
      />
      <Link
        to="/knihovny"
        onClick={() => window.location.reload()}
        style={{ textDecoration: "none" }}
      >
        <Accordion
          i={6}
          expanded={expanded}
          setExpanded={setExpanded}
          title="KNIHOVNY ARCHÍVY"
        />
      </Link>
      <Link
        to="/kulturni"
        onClick={() => window.location.reload()}
        style={{ textDecoration: "none" }}
      >
        <Accordion
          i={7}
          expanded={expanded}
          setExpanded={setExpanded}
          title="KULTURNÍ INSTITUCE"
        />
      </Link>
    </div>
  );
};
