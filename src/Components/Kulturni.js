import React from "react";

import googleart from "../Pics/googleart.jpg";
import nm from "../Pics/nm.jpg";
import ntm from "../Pics/ntm.jpg";
import ng from "../Pics/ng.jpg";
import zcgalerie from "../Pics/zcgalerie.jpg";
import idivadlo from "../Pics/idivadlo.jpg";
import louvre from "../Pics/louvre.jpg";
import gug from "../Pics/gug.jpg";
import ngausa from "../Pics/ngausa.jpg";
import brit from "../Pics/brit.jpg";
import usanatural from "../Pics/usanatural.jpg";
import met from "../Pics/met.jpg";
import women from "../Pics/women.jpg";
import vatican from "../Pics/vatican.jpg";
import dali from "../Pics/dali.jpg";
import ctdivadlo from "../Pics/ctdivadlo.jpg";
import rokoko from "../Pics/rokoko.jpg";
import vmuzeudoma from "../Pics/vmuzeudoma.jpg";

export const Kulturni = () => {
  return (
    <div className="BoxProKarty">
      <a
        href="https://artsandculture.google.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={googleart} alt="googleart" />
      </a>
      <a
        href="https://www.nm.cz/virtualne-do-muzea"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={nm} alt="nm" />
      </a>
      <a
        href="http://www.ntm.cz/expozice/virtualni-prohlidky?fbclid=IwAR39JA_nenqh81Z8B1Qz-Ht1-d8TUC5gm64tv3uhjAtrMHE4L1WN5m2xZTI"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ntm} alt="ntm" />
      </a>
      <a
        href="https://www.ngprague.cz/o-nas/novinky/online-ngp"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ng} alt="ng" />
      </a>
      <a
        href="http://www.zpc-galerie.cz/online"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={zcgalerie} alt="zcgalerie" />
      </a>
      <a
        href="https://www.i-divadlo.cz/stream?fbclid=IwAR3M3-JYITrH05pCp7gOevSKVsTOzvHFpuwihKuooDYWyt3rsMtF5SRru4c"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={idivadlo} alt="idivadlo" />
      </a>
      <a
        href="https://art.ceskatelevize.cz/tema/divadlo"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={ctdivadlo} alt="ctdivadlo" />
      </a>
      <a
        href="https://www.louvre.fr/en/visites-en-ligne#tabs"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={louvre} alt="louvre" />
      </a>
      <a
        href="https://www.guggenheim.org/collection-online"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={gug} alt="gug" />
      </a>
      <a href="https://www.nga.gov/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={ngausa} alt="ngausa" />
      </a>
      <a
        href="https://www.britishmuseum.org/collection"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={brit} alt="brit" />
      </a>
      <a
        href="https://naturalhistory.si.edu/visit/virtual-tour"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={usanatural} alt="usanatural" />
      </a>
      <a
        href="https://www.metmuseum.org/art/online-features"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={met} alt="met" />
      </a>
      <a
        href="https://www.womenshistory.org/womens-history/online-exhibits"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={women} alt="women" />
      </a>
      <a
        href="http://www.museivaticani.va/content/museivaticani/en/collezioni/musei/tour-virtuali-elenco.html"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={vatican} alt="vatican" />
      </a>
      <a
        href="https://www.salvador-dali.org/en/museums/dali-theatre-museum-in-figueres/visita-virtual/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={dali} alt="dali" />
      </a>
      <a
        href="https://www.youtube.com/c/MestskadivadlaprazskaCz/videos"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={rokoko} alt="rokoko" />
      </a>
      <a
        href="https://www.nzm.cz/aktuality/v-muzeu-jako-doma?fbclid=IwAR0wPdIS-WbJGeR2u0orR7ZgtNlFgNYJL_xx95zk6YrQZ3MtdB0jVryJRyg"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="obrazekKarty"
          src={vmuzeudoma}
          alt="V muzeu jako doma"
        />
      </a>
    </div>
  );
};
