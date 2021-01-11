import React from "react";
import { Link } from "react-router-dom";
import "./NavigaceVertikalni.css";

export const NavigaceVertikalni = () => {
  return (
    <div className="NavigaceVertikalniKontejner">
      <Link className="verButton" to="/predmety">ŠKOLNÍ PŘEDMĚTY</Link>
      <Link className="verButton" to="/jazyky">CIZÍ JAZYKY</Link>
      <Link className="verButton" to="/alternativni">ALTERNATIVNÍ ZPŮSOB VZDELÁVÁNÍ</Link>
      <Link className="verButton" to="/rozsirujici">ROZŠIŘUJÍCÍ UČIVO</Link>
      <Link className="verButton" to="/umelecke">UMĚLECKÉ PŘEDMĚTY</Link>
      <Link className="verButton" to="/pohyb">POHYBOVÉ AKTIVITY</Link>
      <Link className="verButton" to="/knihovny">KNIHOVNY ARCHÍVY</Link>
      <Link className="verButton" to="/kulturni">KULTURNÍ INSTITUCE</Link>
    </div>
  );
};
