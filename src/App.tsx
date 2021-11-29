import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NormalLoginFormPage from "./NormalLoginFormPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/normal">
            <NormalLoginFormPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
