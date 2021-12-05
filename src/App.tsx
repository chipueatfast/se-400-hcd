import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NormalLoginFormPage from "./NormalLoginFormPage";
import HcdLoginFormPage from "./HcdLoginFormPage";
import NormalOpenFilePage from "NormalOpenFilePage";
import HcdOpenFilePage from "HcdOpenFilePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/normal/login">
            <NormalLoginFormPage />
          </Route>
          <Route path="/normal/open-file">
            <NormalOpenFilePage />
          </Route>
          <Route path="/hcd/login">
            <HcdLoginFormPage />
          </Route>
          <Route path="/hcd/open-file">
            <HcdOpenFilePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
