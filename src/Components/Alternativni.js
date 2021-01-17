import React from 'react';

import matikain from "../Pics/matikain.jpg";
import marche from "../Pics/marche.jpg";
import skolasnu from "../Pics/skolasnu.jpg";
import hello from "../Pics/hello.jpg";
import timixi from "../Pics/timixi.jpg";

export const Alternativni = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://www.matika.in/cs/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={matikain} alt="matikain" />
            </a>
            <a href="https://drive.google.com/drive/folders/1j_lIpugdMDxuY8ZHW3okzWA5PrjFR6CG?fbclid=IwAR0SLshuuzCKz0o1-aj9xyOh5FbkfIQn_qsRWp40Qj3TI-ngZzjVKjmQYeQ" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={marche} alt="Marché Montessori" />
            </a>
            <a href="https://www.ceskatelevize.cz/porady/10267570807-skola-snu/dily/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={skolasnu} alt="Škola snů" />
            </a>
            <a href="https://www.hellowonderful.co/category/learn/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={hello} alt="Hello Wonderful" />
            </a>
            <a href="https://www.timixi.com/" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={timixi} alt="timixi" />
            </a>

        </div>
    )
}