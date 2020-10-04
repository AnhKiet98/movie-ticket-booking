import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./pages/404/PageNotFound";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
