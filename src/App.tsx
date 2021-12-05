import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NormalLoginFormPage from "./NormalLoginFormPage";
import HcdLoginFormPage from "./HcdLoginFormPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/normal/login">
            <NormalLoginFormPage />
          </Route>
          <Route path="/hcd/login">
            <HcdLoginFormPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
