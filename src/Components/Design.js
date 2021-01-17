import React from 'react'

import mujrozcestnik from "../Pics/mujrozcestnik.jpg";

export const Design = () => {
    return (
        <div className="BoxProKarty">
            <a href="http://www.veronikapucerova.cz/archanddesignguide.html" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={mujrozcestnik} alt="Rozcestník architektury a designu" />
            </a>
        </div>
    )
}