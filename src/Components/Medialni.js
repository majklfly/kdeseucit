import React from 'react';

import dezinformace from "../Pics/dezinformace.jpg";

export const Medialni = () => {
    return (
        <div className="BoxProKarty">
            <a href="https://www.irozhlas.cz/zpravy-domov/hra-dezinformace-fake-news-falesne-zpravy_1808310740_zlo" target="_blank" rel="noreferrer">
                <img className="obrazekKarty" src={dezinformace} alt="dezinformace" />
            </a>
        </div>
    )
}