import React from 'react';

import pilir from "../Pics/pilir.jpg";
import ctedu from "../Pics/ctedu.jpg";
import a489 from "../Pics/a489.jpg";
import gjf from "../Pics/gjf.jpg";
import mujrozcestnik from "../Pics/mujrozcestnik.jpg";

export const Architektura = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://www.casopispilir.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={pilir} alt="pilir" />
            </a>
            <a href="https://edu.ceskatelevize.cz/predmet/umeni-a-kultura" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={ctedu} alt="ctedu" />
            </a>
            <a href="https://www.a489.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={a489} alt="a489" />
            </a>
            <a href="https://www.gjf.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={gjf} alt="gjf" />
            </a>
            <a href="https://www.gjf.cz/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={mujrozcestnik} alt="Rozcestník architektury a designu" />
            </a>
        </div>
    )
}