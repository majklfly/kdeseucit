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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
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
