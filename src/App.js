import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = ({ props }) => (
  <div>
    <h2>Hats Page</h2>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/:menuItem"} component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
