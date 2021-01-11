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


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
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
