import React from 'react';

import ctedu from "../Pics/ctedu.jpg";
import ddm from "../Pics/ddm.jpg";
import idivadlo from "../Pics/idivadlo.jpg";
import ctdivadlo from "../Pics/ctdivadlo.jpg";

export const Divadlo = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://edu.ceskatelevize.cz/predmet/hudebni-a-pohybove-aktivity" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={ctedu} alt="ctedu" />
            </a>
            <a href="https://mitkamjit.cz/?zamereni=16&vek=" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={ddm} alt="ddm" />
            </a>
            <a href="https://www.i-divadlo.cz/stream?fbclid=IwAR3M3-JYITrH05pCp7gOevSKVsTOzvHFpuwihKuooDYWyt3rsMtF5SRru4c" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={idivadlo} alt="idivadlo" />
            </a>
            <a href="https://art.ceskatelevize.cz/tema/divadlo" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={ctdivadlo} alt="ctdivadlo" />
            </a>
        </div>
    )
}