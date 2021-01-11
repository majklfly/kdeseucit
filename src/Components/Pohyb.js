import React from 'react'
import { Link } from "react-router-dom";

export const Pohyb = () => {
    return (
        <div className="BoxProOdkazy">
        <Link className="sectionButtonLink" to="/sport"><h3 className="sectionButton">SPORT</h3></Link>
        <Link className="sectionButtonLink" to="/tanec"><h3 className="sectionButton">TANEC</h3></Link>
        <Link className="sectionButtonLink" to="/divadlo"><h3 className="sectionButton">DIVADLO</h3></Link>
        <Link className="sectionButtonLink" to="/tabornici"><h3 className="sectionButton">TÁBOROVÉ AKTIVITY A HRY</h3></Link>
        <Link className="sectionButtonLink" to="/turistika"><h3 className="sectionButton">TURISTIKA</h3></Link>
    </div>
    )
}