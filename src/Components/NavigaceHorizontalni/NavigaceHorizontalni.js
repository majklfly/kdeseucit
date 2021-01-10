import React from "react";

import { Link } from "react-router-dom";
import "./NavigaceHorizontalni.css";

export const NavigaceHorizontalni = () => {
  return (
    <div className="horizontalniNavigaceKontejner">
      <Link className="navButton" to="/predskolaci">
        PŘEDŠKOLÁCI
      </Link>
      <Link className="navButton" to="/prvnitrida">
        1. TŘÍDA
      </Link>
      <Link className="navButton" to="/druhatrida">
        2. TŘÍDA
      </Link>
      <Link className="navButton" to="/tretitrida">
        3. TŘÍDA
      </Link>
      <Link className="navButton" to="ctvrtatrida">
        4. TŘÍDA
      </Link>
      <Link className="navButton" to="/patatrida">
        5. TŘÍDA
      </Link>
      <Link className="navButton" to="/sestatrida">
        6. TŘÍDA
      </Link>
      <Link className="navButton" to="/sedmatrida">
        7. TŘÍDA
      </Link>
      <Link className="navButton" to="/osmatrida">
        8. TŘÍDA
      </Link>
      <Link className="navButton" to="/devatatrida">
        9. TŘÍDA
      </Link>
      <Link className="navButton" to="/stredniskola">
        STŘEDNÍ ŠKOLA
      </Link>
      <Link className="navButton" to="/vyssistupne">
        VYŠŠÍ STUPNĚ
      </Link>
      <Link className="navButton" to="/celozivotnivzdelavani">
        CELOŽIVOTNÍ VZDĚLÁVÁNÍ
      </Link>
    </div>
  );
};
