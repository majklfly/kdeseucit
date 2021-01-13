import React from 'react';

import ctedu from "../Pics/ctedu.jpg";
import ddm from "../Pics/ddm.jpg";

export const Tanec = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://edu.ceskatelevize.cz/predmet/hudebni-a-pohybove-aktivity" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={ctedu} alt="ctedu" />
            </a>
            <a href="https://mitkamjit.cz/?zamereni=6&vek=" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={ddm} alt="ddm" />
            </a>
        </div>
    )
}