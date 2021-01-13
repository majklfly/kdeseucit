import React from 'react';

import ddm from "../Pics/ddm.jpg";

export const Hudebni = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://mitkamjit.cz/?zamereni=1&vek=" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={ddm} alt="ddm" />
            </a>
        </div>
    )
}