import React from "react";

import { Link } from "react-router-dom";
import "./NavigaceHorizontalni.css";

export const NavigaceHorizontalni = () => {
  return (
    <div className="horizontalniNavigaceKontejner">
      <Link className="navButton">PŘEDŠKOLÁCI</Link>
      <Link className="navButton">1. TŘÍDA</Link>
      <Link className="navButton">2. TŘÍDA</Link>
      <Link className="navButton">3. TŘÍDA</Link>
      <Link className="navButton">4. TŘÍDA</Link>
      <Link className="navButton">5. TŘÍDA</Link>
      <Link className="navButton">6. TŘÍDA</Link>
      <Link className="navButton">7. TŘÍDA</Link>
      <Link className="navButton">8. TŘÍDA</Link>
      <Link className="navButton">9. TŘÍDA</Link>
      <Link className="navButton">STŘEDNÍ ŠKOLA</Link>
      <Link className="navButton">VYŠŠÍ STUPNĚ</Link>
      <Link className="navButton">CELOŽIVOTNÍ VZDĚLÁVÁNÍ</Link>
    </div>
  );
};
