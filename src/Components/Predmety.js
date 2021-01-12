import React from 'react'
import { Link } from "react-router-dom";

export const Predmety = () => {
    return (
        <div className="OuterBoxOdkazy">
            <div className="BoxProOdkazy">
            <Link className="sectionButtonLink" to="/cestina"><h3 className="sectionButton">ČESKÝ JAZYK</h3></Link>
            <Link className="sectionButtonLink" to="/literatura"><h3 className="sectionButton">ČTENÍ * LITERATURA</h3></Link>
            <Link className="sectionButtonLink" to="/psani"><h3 className="sectionButton">PSANÍ</h3></Link>
            <Link className="sectionButtonLink" to="/matematika"><h3 className="sectionButton">MATEMATIKA</h3></Link>
            <Link className="sectionButtonLink" to="/prvouka"><h3 className="sectionButton">PRVOUKA</h3></Link>
            <Link className="sectionButtonLink" to="/vlastiveda"><h3 className="sectionButton">VLASTIVĚDA</h3></Link>
            <Link className="sectionButtonLink" to="/prirodoveda"><h3 className="sectionButton">PŘÍRODOVĚDA</h3></Link>
            <Link className="sectionButtonLink" to="/informatika"><h3 className="sectionButton">INFORMATIKA</h3></Link>
            <Link className="sectionButtonLink" to="/zemepis"><h3 className="sectionButton">ZEMĚPIS</h3></Link>
            <Link className="sectionButtonLink" to="/prirodopis"><h3 className="sectionButton">PŘÍRODOPIS BIOLOGIE</h3></Link>
            <Link className="sectionButtonLink" to="/dejepis"><h3 className="sectionButton">DĚJEPIS</h3></Link>
            <Link className="sectionButtonLink" to="/chemie"><h3 className="sectionButton">CHEMIE</h3></Link>
            <Link className="sectionButtonLink" to="/fyzika"><h3 className="sectionButton">FYZIKA</h3></Link>
            <Link className="sectionButtonLink" to="/ekologie"><h3 className="sectionButton">EKOLOGICKÁ VÝCHOVA</h3></Link>
            <Link className="sectionButtonLink" to="/obcanka"><h3 className="sectionButton">OBČANSKÁ VÝCHOVA</h3></Link>
            <Link className="sectionButtonLink" to="/rodinka"><h3 className="sectionButton">RODINNÁ VÝCHOVA</h3></Link>
            <Link className="sectionButtonLink" to="/pracovka"><h3 className="sectionButton">PRACOVNÍ VÝCHOVA</h3></Link>
            <Link className="sectionButtonLink" to="/pozemky"><h3 className="sectionButton">PĚSTITELSKÉ PRÁCE</h3></Link>
            <Link className="sectionButtonLink" to="/zsv"><h3 className="sectionButton">ZÁKLADY SPOLEČENSKÝCH VĚD</h3></Link>
            <Link className="sectionButtonLink" to="/medialni"><h3 className="sectionButton">MEDIÁLNÍ GRAMOTNOST</h3></Link>
            </div>
        </div>
    )
}