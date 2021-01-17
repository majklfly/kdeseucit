import "./Layout.css";

import lupa from "../../Pics/lupa.jpg";
import atom from "../../Pics/atom.jpg";
import bublina from "../../Pics/bublina.jpg";
import hodiny from "../../Pics/hodiny.jpg";
import pastelky from "../../Pics/pastelky.jpg";
import kruzitko from "../../Pics/kruzitko.jpg";

import { NavigaceHorizontalni } from "../../Components/NavigaceHorizontalni/NavigaceHorizontalni";
import { NavigaceVertikalni } from "../../Components/NavigaceVertikalni/NavigaceVertikalni";

import { Link } from 'react-router-dom'

export const Layout = ({ contentComponent }) => {
  return (
    <main>
      <Link className="homepageLink" to="/">
        <header className="HlavickaKontejner">
          <img className="headPic" src={pastelky} alt="pastelky" />
          <img className="headPic" src={kruzitko} alt="kruzitko" />
          <h1>Kde se učit?</h1>
          <img className="headPic" src={lupa} alt="lupa" />
          <img className="headPic" src={bublina} alt="bublina" />
          <img className="headPic" src={atom} alt="atom" />
          <img className="headPic" src={hodiny} alt="hodiny" />
        </header>
      </Link>
      <h2>
        ROZCESTNÍK VÝUKOVÝCH MATERIÁLŮ - VZDĚLÁVACÍCH INSTITUCÍ A PAMĚŤOVÝCH
        INSTITUCÍ Z ČR I ZAHRANIČÍ
      </h2>
      <NavigaceHorizontalni />
      <div className="content">
        <NavigaceVertikalni />
        {contentComponent}
      </div>
      <footer>
        <h4>Napište na <a  href="mailto:veronika.kovarova@pirati.cz">veronika.kovarova@pirati.cz</a> pokud máte připomínky, nápady nebo jste našli nefunkční odkaz, děkuji. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Stránky sestavil <a  href="https://www.michalmucha.info"> Michal Mucha</a>. </h4>
      </footer>
    </main>
  )
}
