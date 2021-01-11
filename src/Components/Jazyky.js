import React from 'react';
import { Link } from "react-router-dom";

export const Jazyky = () => {
    return (
        <div className="BoxProOdkazy">
            <Link className="sectionButtonLink" to="/anglicky"><h3 className="sectionButton">ANGLICKÝ JAZYK</h3></Link>
            <Link className="sectionButtonLink" to="/nemecky"><h3 className="sectionButton">NĚMECKÝ JAZYK</h3></Link>
            <Link className="sectionButtonLink" to="/francouzsky"><h3 className="sectionButton">FRANCOUZSKÝ JAZYK</h3></Link>
            <Link className="sectionButtonLink" to="/spanelsky"><h3 className="sectionButton">ŠPANĚLSKÝ JAZYK</h3></Link>
            <Link className="sectionButtonLink" to="/rusky"><h3 className="sectionButton">RUSKÝ JAZYK</h3></Link>
        </div>
    )
}