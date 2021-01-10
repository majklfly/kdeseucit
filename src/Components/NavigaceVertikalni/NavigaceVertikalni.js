import React from "react";
import { Link } from "react-router-dom";
import "./NavigaceVertikalni.css";

export const NavigaceVertikalni = () => {
  return (
    <div className="NavigaceVertikalniKontejner">
      <Link className="verButton">ŠKOLNÍ PŘEDMĚTY</Link>
      <Link className="verButton">CIZÍ JAZYKY</Link>
      <Link className="verButton">ALTERNATIVNÍ ZPŮSOB VZDELÁVÁNÍ</Link>
      <Link className="verButton">ROZŠIŘUJÍCÍ UČIVO</Link>
      <Link className="verButton">UMĚLECKÉ PŘEDMĚTY</Link>
      <Link className="verButton">POHYBOVÉ AKTIVITY</Link>
      <Link className="verButton">KNIHOVNY ARCHÍVY</Link>
      <Link className="verButton">KULTURNÍ INSTITUCE</Link>
    </div>
  );
};
