import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DomaciObrazovka } from "./Screens/DomaciObrazovka";
import { PredskolaciScreen } from "./Screens/PredskolaciScreen";
import { PrvnitridaScreen } from "./Screens/PrvnitridaScreen";
import { DruhatridaScreen } from "./Screens/DruhatridaScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
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
