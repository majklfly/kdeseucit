import React from 'react';

import hello from "../Pics/hello.jpg";

export const Rodinka = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://www.hellowonderful.co/category/eat/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={hello} alt="hello" />
            </a>
        </div>
    )
}