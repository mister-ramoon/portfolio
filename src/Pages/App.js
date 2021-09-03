import React from "react";
import Home from "./Home";

import { Switch, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="root">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
