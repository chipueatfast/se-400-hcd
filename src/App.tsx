import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NormalLoginFormPage from "./NormalLoginFormPage";
import HcdLoginFormPage from "./HcdLoginFormPage";
import NormalOpenFilePage from "NormalOpenFilePage";
import HcdOpenFilePage from "HcdOpenFilePage";
import NormalOverwriteFilePage from "NormalOverwriteFilePage";
import { Modal } from "ui-build";
import HcdOverwriteFilePage from "HcdOverwriteFilePage";

Modal.setAppElement("#root");
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <div style={{
              paddingTop: "100px",
              maxWidth: "800px",
              margin: "0 auto",
              width: "100%",
            }}>
              <h2>
                Normal design examples
              </h2>
              <a href="/normal/login">Normal Login Form</a>
              <br />
              <a href="/normal/open-file">Normal Open file</a>&nbsp;
              <br />
              <a href="/normal/overwrite-file">Normal overwrite file</a>&nbsp;
              <br />
              <h2>
                HCD design examples
              </h2>
              <a href="/hcd/login">HCD Login Form</a>&nbsp;
              <br />
              <a href="/hcd/open-file">HCD Open file</a>&nbsp;
              <br />
              <a href="/hcd/overwrite-file">HCD  overwrite file</a>&nbsp;
            </div>
          </Route>
          <Route path="/normal/login">
            <NormalLoginFormPage />
          </Route>
          <Route path="/normal/open-file">
            <NormalOpenFilePage />
          </Route>
          <Route path="/normal/overwrite-file">
            <NormalOverwriteFilePage />
          </Route>
          <Route path="/hcd/login">
            <HcdLoginFormPage />
          </Route>
          <Route path="/hcd/open-file">
            <HcdOpenFilePage />
          </Route>
          <Route path="/hcd/overwrite-file">
            <HcdOverwriteFilePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
