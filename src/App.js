import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeParallax from "./components/homeParallax/HomeParallax";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route exact path="/" component={HomeParallax} />
          <Route path="/layout" component={Layout} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
