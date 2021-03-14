import React from "react";

import prijmackybezobav from "../Pics/prijmackybezobav.jpg";
import ctprijmacky from "../Pics/ctprijmacky.jpg";
import opicimatika from "../Pics/opicimatika.jpg";
import skolaposkole9 from "../Pics/skolaposkole9.jpg";
import umimcestinu from "../Pics/umimcestinu.jpg";
import dna1 from "../Pics/dna1.jpg";
import cermat from "../Pics/cermat.jpg";
import learntube from "../Pics/learntube.jpg";
import diktaty from "../Pics/diktaty.jpg";
import pripravujseonline from "../Pics/pripravujseonline.jpg";
import dodomu from "../Pics/dodomu.jpg";

export const Prijimacky = () => {
  return (
    <div className="BoxProKarty">
      <a
        href="https://www.youtube.com/playlist?list=PLD_48WTXRpqOpIAZ3zE0I9mOipH7FxhWq"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={prijmackybezobav}
          alt="prijmackybezobav"
        />
      </a>
      <a
        href="https://www.ceskatelevize.cz/porady/10000000405-skola-doma/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ctprijmacky} alt="ctprijmacky" />
      </a>
      <a href="http://www.opicimatika.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={opicimatika} alt="opicimatika" />
      </a>
      <a
        href="https://skolaposkole.cz/prijimaci-zkousky-stredni-skoly"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={skolaposkole9} alt="skolaposkole9" />
      </a>
      <a
        href="https://umimcestinu.wordpress.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={umimcestinu} alt="umimcestinu" />
      </a>
      <a href="https://dn1.cz/prijimacky" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={dna1} alt="dna1" />
      </a>
      <a href="https://prijimacky.cermat.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={cermat} alt="cermat" />
      </a>
      <a
        href="https://www.youtube.com/playlist?list=PLCPJTN2URtyXJFsq9ufwMc_gEDgKvFDPZ"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={dodomu}
          alt="dodomu"
          title="Trénování CERMAT testů"
        />
      </a>
      <a
        href="https://www.youtube.com/channel/UCOCsqf9KoHNAuCj_5iVR6sA/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={learntube} alt="learntube" />
      </a>
      <a href="https://cestina.diktaty.cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={diktaty} alt="diktaty" />
      </a>
      <a
        href="https://www.pripravujseonline.cz/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={pripravujseonline}
          alt="pripravujseonline"
        />
      </a>
    </div>
  );
};
