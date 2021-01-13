import React from 'react';

import ctedu from "../Pics/ctedu.jpg";

export const Multimedia = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://edu.ceskatelevize.cz/predmet/ict" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={ctedu} alt="ctedu" />
            </a>
        </div>
    )
}