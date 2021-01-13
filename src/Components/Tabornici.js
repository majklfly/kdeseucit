import React from 'react';

import ctedu from "../Pics/ctedu.jpg";

export const Tabornici = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://edu.ceskatelevize.cz/predmet/hudebni-a-pohybove-aktivity" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={ctedu} alt="ctedu" />
            </a>
        </div>
    )
}