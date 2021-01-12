import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DomaciObrazovka } from "./Screens/DomaciObrazovka";
import { PredskolaciScreen } from "./Screens/PredskolaciScreen";
import { PrvnitridaScreen } from "./Screens/PrvnitridaScreen";
import { DruhatridaScreen } from "./Screens/DruhatridaScreen";
import { TretitridaScreen } from "./Screens/TretitridaScreen";
import { CtvrtatridaScreen } from "./Screens/CtvrtatridaScreen";
import { PatatridaScreen } from "./Screens/PatatridaScreen";
import { SestatridaScreen } from "./Screens/SestatridaScreen";
import { SedmatridaScreen } from "./Screens/SedmatridaScreen";
import { OsmatridaScreen } from "./Screens/OsmatridaScreen";
import { DevatatridaScreen } from "./Screens/DevatatridaScreen";
import { StredniScreen } from "./Screens/StredniScreen";
import { VyssistupneScreen } from "./Screens/VyssistupneScreen";
import { CelozivotnivzdelavaniScreen } from "./Screens/CelozivotnivzdelavaniScreen";
import { PrijimackyScreen } from "./Screens/PrijimackyScreen";
import { MaturitaScreen } from "./Screens/MaturitaScreen";
import { PredmetyScreen } from "./Screens/PredmetyScreen";
import { JazykyScreen } from "./Screens/JazykyScreen";
import { UmeleckeScreen } from "./Screens/UmeleckeScreen";
import { PohybScreen } from "./Screens/PohybScreen";
import { CestinaScreen } from "./Screens/CestinaScreen";
import { LiteraturaScreen } from "./Screens/LiteraturaScreen";
import { PsaniScreen } from "./Screens/PsaniScreen";
import { MatematikaScreen } from "./Screens/MatematikaScreen";
import { PrvoukaScreen } from "./Screens/PrvoukaScreen";
import { VlastivedaScreen } from "./Screens/VlastivedaScreen";
import { PrirodovedaScreen } from "./Screens/PrirodovedaScreen";
import { InformatikaScreen } from "./Screens/InformatikaScreen";
import { ZemepisScreen } from "./Screens/ZemepisScreen";
import { PrirodopisScreen } from "./Screens/PrirodopisScreen";
import { DejepisScreen } from "./Screens/DejepisScreen";
import { ChemieScreen } from "./Screens/ChemieScreen";
import { FyzikaScreen } from "./Screens/FyzikaScreen";
import { EkologieScreen } from "./Screens/EkologieScreen";
import { ObcankaScreen } from "./Screens/ObcankaScreen";
import { RodinkaScreen } from "./Screens/RodinkaScreen";
import { PracovkaScreen } from "./Screens/PracovkaScreen";
import { PozemkyScreen } from "./Screens/PozemkyScreen";
import { ZSVScreen } from "./Screens/ZSVScreen";
import { MedialniScreen } from "./Screens/MedialniScreen";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/medialni">
            <MedialniScreen />
          </Route>
          <Route path="/zsv">
            <ZSVScreen />
          </Route>
          <Route path="/pozemky">
            <PozemkyScreen />
          </Route>
          <Route path="/pracovka">
            <PracovkaScreen />
          </Route>
          <Route path="/rodinka">
            <RodinkaScreen />
          </Route>
          <Route path="/obcanka">
            <ObcankaScreen />
          </Route>
          <Route path="/ekologie">
            <EkologieScreen />
          </Route>
          <Route path="/fyzika">
            <FyzikaScreen />
          </Route>
          <Route path="/chemie">
            <ChemieScreen />
          </Route>
          <Route path="/dejepis">
            <DejepisScreen />
          </Route>
          <Route path="/prirodopis">
            <PrirodopisScreen />
          </Route>
          <Route path="/zemepis">
            <ZemepisScreen />
          </Route>
          <Route path="/informatika">
            <InformatikaScreen />
          </Route>
          <Route path="/prirodoveda">
            <PrirodovedaScreen />
          </Route>
          <Route path="/vlastiveda">
            <VlastivedaScreen />
          </Route>
          <Route path="/prvouka">
            <PrvoukaScreen />
          </Route>
          <Route path="/matematika">
            <MatematikaScreen />
          </Route>
          <Route path="/psani">
            <PsaniScreen />
          </Route>
          <Route path="/literatura">
            <LiteraturaScreen />
          </Route>
          <Route path="/cestina">
            <CestinaScreen />
          </Route>
          <Route path="/pohyb">
            <PohybScreen />
          </Route>
          <Route path="/umelecke">
            <UmeleckeScreen />
          </Route>
          <Route path="/jazyky">
            <JazykyScreen />
          </Route>
         <Route path="/predmety">
            <PredmetyScreen />
          </Route>
          <Route path="/maturita">
            <MaturitaScreen />
          </Route>
          <Route path="/prijimacky">
            <PrijimackyScreen />
          </Route>
          <Route path="/celozivotnivzdelavani">
            <CelozivotnivzdelavaniScreen />
          </Route>
          <Route path="/vyssistupne">
            <VyssistupneScreen />
          </Route>
          <Route path="/stredni">
            <StredniScreen />
          </Route>
          <Route path="/devatatrida">
            <DevatatridaScreen />
          </Route>
          <Route path="/osmatrida">
            <OsmatridaScreen />
          </Route>
          <Route path="/sedmatrida">
            <SedmatridaScreen />
          </Route>
          <Route path="/sestatrida">
            <SestatridaScreen />
          </Route>
          <Route path="/patatrida">
            <PatatridaScreen />
          </Route>
          <Route path="/ctvrtatrida">
            <CtvrtatridaScreen />
          </Route>
          <Route path="/tretitrida">
            <TretitridaScreen />
          </Route>
          <Route path="/druhatrida">
            <DruhatridaScreen />
          </Route>
          <Route path="/predskolaci">
            <PredskolaciScreen />
          </Route>
          <Route path="/prvnitrida">
            <PrvnitridaScreen />
          </Route>
          <Route path="/">
            <DomaciObrazovka />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
