import React from "react";

import hello from "../Pics/hello.jpg";
import pinterest from "../Pics/pinterest.jpg";
import bankovkovi from "../Pics/bankovkovi.jpg";

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
    </div>
  );
};
