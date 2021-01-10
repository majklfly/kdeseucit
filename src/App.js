import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DomaciObrazovka } from "./Screens/HomeScreen/DomaciObrazovka";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <DomaciObrazovka />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
