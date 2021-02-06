import React from "react";

import { Link } from "react-router-dom";
import "./NavigaceHorizontalni.css";

export const NavigaceHorizontalni = ({ sideSlideSetActive }) => {
  return (
    <div className="horizontalniNavigaceKontejner">
      <Link className="navButton" to="/predskolaci">
        PŘEDŠKOLÁCI
      </Link>
      <Link className="navButton" to="/prvnitrida">
        1.&nbsp;<span className="navButtonClassText"> TŘÍDA</span>
      </Link>
      <Link className="navButton" to="/druhatrida">
        2.&nbsp;<span className="navButtonClassText"> TŘÍDA</span>
      </Link>
      <Link className="navButton" to="/tretitrida">
        3.&nbsp;<span className="navButtonClassText"> TŘÍDA</span>
      </Link>
      <Link className="navButton" to="ctvrtatrida">
        4.&nbsp;<span className="navButtonClassText"> TŘÍDA</span>
      </Link>
      <Link className="navButton" to="/patatrida">
        5.&nbsp;<span className="navButtonClassText"> TŘÍDA</span>
      </Link>
      <Link className="navButton" to="/sestatrida">
        6.&nbsp;<span className="navButtonClassText"> TŘÍDA</span>
      </Link>
      <Link className="navButton" to="/sedmatrida">
        7.&nbsp;<span className="navButtonClassText"> TŘÍDA</span>
      </Link>
      <Link className="navButton" to="/osmatrida">
        8.&nbsp;<span className="navButtonClassText"> TŘÍDA</span>
      </Link>
      <Link className="navButton" to="/devatatrida">
        9.&nbsp;<span className="navButtonClassText"> TŘÍDA</span>
      </Link>
      <Link className="navButton" to="/stredni">
        STŘEDNÍ ŠKOLA
      </Link>
      <Link className="navButton" to="/vyssistupne">
        VYŠŠÍ STUPNĚ
      </Link>
      <Link className="navButton" to="/celozivotnivzdelavani">
        CELOŽIVOTNÍ VZDĚLÁVÁNÍ
      </Link>
      <Link className="navButton" to="/ucitele">
        PRO UČITELE
      </Link>
    </div>
  );
};
