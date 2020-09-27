import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeParallax from "./components/homeParallax/HomeParallax";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route exact path="/" component={HomeParallax} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
