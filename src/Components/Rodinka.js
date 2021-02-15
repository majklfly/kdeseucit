import React from "react";

import hello from "../Pics/hello.jpg";
import pinterest from "../Pics/pinterest.jpg";
import bankovkovi from "../Pics/bankovkovi.jpg";
import cesty from "../Pics/cesty.jpg";
import vmuzeudoma from "../Pics/vmuzeudoma.jpg";

export const Rodinka = () => {
  return (
    <div className="BoxProKarty">
      <a
        href="https://www.hellowonderful.co/category/eat/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={hello} alt="Hello wonderful" />
      </a>
      <a href="https://cz.pinterest.com/" target="_blank" rel="noreferrer">
        <img className="obrazekKarty" src={pinterest} alt="pinterest" />
      </a>
      <a
        href="https://decko.ceskatelevize.cz/bankovkovi"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={bankovkovi} alt="bankovkovi" />
      </a>
      <a
        href="https://www.bezpecnecesty.cz/cz/dopravni-vychova"
        target="_blank"
        rel="noreferrer"
      >
        <img className="obrazekKarty" src={cesty} alt="Bezpečné cesty" />
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
