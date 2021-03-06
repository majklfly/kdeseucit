import React from "react";

import snadhledem from "../Pics/snadhledem.jpg";
import umimefakta from "../Pics/umimefakta.jpg";
import jedensvet from "../Pics/jedensvet.jpg";
import dezinformace from "../Pics/dezinformace.jpg";
import svetmedii from "../Pics/svetmedii.jpg";
import migrace from "../Pics/migrace.jpg";
import bankovkovi from "../Pics/bankovkovi.jpg";
import odyssea from "../Pics/odyssea.jpg";
import bezpravi from "../Pics/bezpravi.jpg";
import slavnedny from "../Pics/slavnedny.jpg";
import pudding from "../Pics/pudding.jpg";

export const Obcanka = () => {
  return (
    <div className="BoxProKarty">
      <a
        href="https://www.skolasnadhledem.cz/profil/2-stupen/2298-obcanska-vychova"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={snadhledem} alt="snadhledem" />
      </a>
      <a
        href="https://www.umimefakta.cz/vychova-k-obcanstvi"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={umimefakta} alt="Umíme fakta" />
      </a>
      <a
        href="https://www.jsns.cz/distancni-vyuka"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={jedensvet}
          alt="Jeden svět na školách"
        />
      </a>
      <a
        href="https://www.irozhlas.cz/zpravy-domov/hra-dezinformace-fake-news-falesne-zpravy_1808310740_zlo"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={dezinformace} alt="Fake news" />
      </a>
      <a href="http://svetmedii.info/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={svetmedii} alt="Svět médií" />
      </a>
      <a href="https://migraceonline.cz/cz/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={migrace} alt="O migraci" />
      </a>
      <a
        href="https://decko.ceskatelevize.cz/bankovkovi"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={bankovkovi} alt="bankovkovi" />
      </a>
      <a
        href="https://www.jsns.cz/projekty/pribehy-bezpravi"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={bezpravi}
          alt="Příběhy bezpráví"
          title="Příběhy bezpráví"
        />
      </a>
      <a href="https://www.ptac.cz/materialy" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={odyssea} alt="odyssea" />
      </a>
      <a href="https://www.slavne-dny.cz/list" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={slavnedny} alt="Slavné dny" />
      </a>
      <a
        href="https://pudding.cool/2018/10/city_3d/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={pudding} alt="pudding" />
      </a>
    </div>
  );
};
