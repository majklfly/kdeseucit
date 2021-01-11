import React from 'react'
import { Link } from "react-router-dom";

export const Umelecke = () => {
    return (
        <div className="BoxProOdkazy">
        <Link className="sectionButtonLink" to="/hudebni"><h3 className="sectionButton">HUDEBNÍ</h3></Link>
        <Link className="sectionButtonLink" to="/vytvarne"><h3 className="sectionButton">VÝTVARNÉ</h3></Link>
        <Link className="sectionButtonLink" to="/multimedialni"><h3 className="sectionButton">MULTIMEDIALNÍ</h3></Link>
        <Link className="sectionButtonLink" to="/architektura"><h3 className="sectionButton">ARCHITEKTURA</h3></Link>
        <Link className="sectionButtonLink" to="/remesla"><h3 className="sectionButton">RUKODĚLNÉ TVOŘENÍ, ŘEMESLA</h3></Link>
    </div>
    )
}